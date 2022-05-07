// SPDX-License-Identifier: GPL-3.0
// Fantazya NFT Contract v1
// @author twitter: _syndk8

pragma solidity >=0.7.0 <0.9.0;

import "./ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract Fantazya is ERC721A, Ownable {
    using Strings for uint256;
    using ECDSA for bytes32;
    using ECDSA for bytes;

    uint256 public MAX_SUPPLY = 3333;
    uint256 public MAX_BATCH = 2;
    uint256 public GIVEAWAYS = 100;
    uint256 public SALE_PRICE = 0.1 ether; //0.175 ether;
    uint256 public PRESALE_PRICE = 0.01 ether;
    uint16 public sale_state;
    bool public paused;
    bool public revealed;
    string public BASE_URL;
    string public PROVENANCE = "";
    bytes32 public EXTENSION = ".json";
    mapping(address => uint256) private minted;
    mapping(address => bool) private owners;
    address public PRIMARY;
    address public PUB_KEY;

    constructor() ERC721A("TEST", "TEST", MAX_BATCH, MAX_SUPPLY) {
        owners[msg.sender] = true;
    }

    modifier ownerOnly {
        require(owners[msg.sender]);
        _;
    }

    /* PUBLIC METHODS */

    /*
    *   public should only be allowed to mint one token per address
    */
    function pubMint(uint256 quantity) public payable
    {
        require(!paused);
        require(totalSupply() < MAX_SUPPLY, "All tokens have been minted");
        require(sale_state == 2, "Public sale is currently inactive");
        require(tx.origin == msg.sender, "Contracts are not allowed to mint");
        require(msg.value == SALE_PRICE, "Incorrect amount of ether");
        require(minted[msg.sender] + quantity <= MAX_BATCH, "Address is not allowed to mint more than MAX_BATCH");        

        minted[msg.sender] += quantity;

        _safeMint(msg.sender, quantity);
    }

    function preMint(uint256 quantity) public payable ownerOnly {
        require(!paused);
        require(owners[msg.sender], "Address is not allowed to mint.");
        require(quantity % MAX_BATCH == 0, "Can only mint a multiple of MAX_BATCH");
        require(totalSupply() + quantity <= GIVEAWAYS, "Quantity exceeds number of reserved tokens");
         
        uint256 numBatch = quantity / MAX_BATCH;
        for(uint256 i = 0; i < numBatch; i++){
            _safeMint(msg.sender, MAX_BATCH);
        }
    }

    // wl happens after premint is complete
    function presale(bytes calldata _signature, uint256 quantity) public payable {
        require(!paused);
        require(sale_state == 1, "Presale is currently inactive");
        require(isWhitelisted(_signature, msg.sender), "Address is not whitelisted");
        require(tx.origin == msg.sender, "Contracts are not allowed to mint");
        require(msg.value == PRESALE_PRICE, "Incorrect amount of ether");
        require(minted[msg.sender] + quantity <= MAX_BATCH, "Address is not allowed to mint more than MAX_BATCH"); // if max batch > 1, need to check uint instead of bool
        
        minted[msg.sender] += quantity;

        _safeMint(msg.sender, quantity);
    }

    /* OVERRIDES */

    /*
    *   @dev Returns the tokenURI to the tokens Metadata
    * Requirements:
    * - `_tokenId` Must be a valid token
    * - `BASE_URL` Must be set
    */
    function tokenURI(uint256 _tokenId) public view virtual override returns(string memory){
        return !revealed ? BASE_URL : string(abi.encodePacked(BASE_URL, _tokenId.toString(), EXTENSION));
    }

    /* PRIVATE METHODS */

    /**
    *   @dev function to verify address is whitelisted
    *   @param _signature - used to verify address
    *   @param _user - address of connected user
    *   @return bool verification
    */
    function isWhitelisted(bytes calldata _signature, address _user) private view returns(bool) {
        return abi.encode(_user,MAX_SUPPLY).toEthSignedMessageHash().recover(_signature) == PUB_KEY;
    }

    /* OWNER ONLY METHODS */

    function setProvenance(string memory _provenance) public ownerOnly {
        PROVENANCE = _provenance;
    }

    function setPubkey(address _key) public ownerOnly {
        PUB_KEY = _key;
    }

    function setPrimaryAddress(address _primary) public ownerOnly {
        PRIMARY = _primary;
    }

    // need to make this multi-sig
    function addOwner(address _account) public ownerOnly {
        require(!owners[_account],"Owner already exists");
        owners[_account] = true;
    }

    // need to make this a multi-sig
    function removeOwner(address _account) public ownerOnly {
        require(owners[_account],"Owner does not exist");
        owners[_account] = false;
    }

    /*
    *   @dev Sets the state of the public sale
    * Requirements:
    * - `_sale_state` Must be an integer
    */
    function setSaleState(uint16 _sale_state) public ownerOnly {
        sale_state = _sale_state;
    }

    /*
    *   @dev Toggles paused state in case of emergency
    */
    function togglePaused() public ownerOnly {
        paused = !paused;
    }

    /*
    *   @dev Sets the BASE_URL for tokenURI
    * Requirements:
    * - `_url` Must be in the form: ipfs://${CID}/
    */
    function setBaseURL(string memory _url) public ownerOnly {
        BASE_URL = _url;
    }

    // make this a multi-sig function amongst owners
    function withdraw() public payable ownerOnly {
        (bool os,)= payable(PRIMARY).call{value:address(this).balance}("");
        require(os);
    }
}