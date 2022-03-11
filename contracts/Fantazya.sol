// SPDX-License-Identifier: GPL-3.0
// Fantazya NFT Contract v1.0.0
// @author x53594E444B38

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract Fantazya is ERC721, Ownable {
    using Strings for uint256;
    using ECDSA for bytes32;
    using ECDSA for bytes;

    uint256 public MAX_SUPPLY = 15; //3333;
    uint256 public MAX_BATCH = 2;
    uint256 public GIVEAWAYS = 10; //100;
    uint256 public EARLY_SUPPLY = 500;
    uint256 public WL_SUPPLY = 1000;
    uint256 public SALE_PRICE = 0.1 ether; //0.175 ether;
    uint256 public _tokenIds;
    uint16 public sale_state;
    bool public paused;
    bool public revealed;
    string public BASE_URL;
    string public PROVENANCE = "";
    bytes32 public EXTENSION = ".json";
    mapping(address => bool) private minted;
    uint256 public mintedGiveaways;
    address public PRIMARY = 0x0200E96F5253EdD00769E443ec904bC3fa1cE0fC;
    address public PUB_KEY;

    constructor() ERC721("Fantazya NFT", "FNTZYA") {}

    /* PUBLIC METHODS */

    /*
    
    */
    function mint(uint256 quantity) public payable
    {
        require(!paused);
        require(sale_state == 3, "Sale is currently inactive");
        require(tx.origin == msg.sender, "Contracts are not allowed to mint");
        require(quantity <= MAX_BATCH, "Only allowed to mint 2 tokens per transaction");
        require(msg.value == (SALE_PRICE * quantity), "Incorrect amount of ether");
        require(!minted[msg.sender], "Address has already minted");
        require(_tokenIds + quantity <= MAX_SUPPLY - GIVEAWAYS, "Purchase would exceed max supply of tokens");

        minted[msg.sender] = true;

        for(uint256 i = 0; i < quantity; i++){ 
            _mint(msg.sender, _tokenIds + 1);
            _tokenIds++;    
        }       
    }

    // need to determine whether giveaways will be minted premint or postmint
    // this will change the require statements.
    function preMint(uint256 quantity) public payable {
        require(!paused);
        require(msg.sender == PUB_KEY, "Address is not allowed to mint.");
        require(mintedGiveaways + quantity <= GIVEAWAYS, "Mint would exceed number of giveaways");
         
        // update giveaways minted
        mintedGiveaways += quantity;

        for(uint256 i = 0; i < quantity; i++){
            _mint(msg.sender, _tokenIds + 1);
            _tokenIds++;
        }
        
    }

    function earlyMint(uint256 quantity, bytes calldata _signature) public payable {
        require(!paused);
        require(sale_state == 1, "Sale is currently inactive");
        require(isWhitelisted(_signature, msg.sender), "Address is not whitelisted");
        require(tx.origin == msg.sender, "Contracts are not allowed to mint");
        require(quantity <= MAX_BATCH, "Only allowed to mint 2 tokens per transaction");
        require(msg.value == (SALE_PRICE * quantity), "Incorrect amount of ether");
        require(!minted[msg.sender], "Address has already minted");
        require((_tokenIds + quantity) <= EARLY_SUPPLY, "Purchase would exceed whitelist supply");

        minted[msg.sender] = true;

        for(uint256 i = 0; i < quantity; i++){ 
            _mint(msg.sender, _tokenIds + 1);
            _tokenIds++;    
        }
    }

    function wlMint(uint256 quantity, bytes calldata _signature) public payable {
        require(!paused);
        require(sale_state == 2, "Sale is currently inactive");
        require(isWhitelisted(_signature, msg.sender), "Address is not whitelisted");
        require(tx.origin == msg.sender, "Contracts are not allowed to mint");
        require(quantity <= MAX_BATCH, "Only allowed to mint 2 tokens per transaction");
        require(msg.value == (SALE_PRICE * quantity), "Incorrect amount of ether");
        require(!minted[msg.sender], "Address has already minted");
        require(_tokenIds + quantity <= WL_SUPPLY + EARLY_SUPPLY, "Purchase would exceed whitelist supply");

        minted[msg.sender] = true;

        for(uint256 i = 0; i < quantity; i++){ 
            _mint(msg.sender, _tokenIds + 1);
            _tokenIds++;    
        }
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

    function setProvenance(string memory _provenance) public onlyOwner {
        PROVENANCE = _provenance;
    }

    function setPubkey(address _key) public onlyOwner {
        PUB_KEY = _key;
    }

    /*
    *   @dev Sets the state of the public sale
    * Requirements:
    * - `_active` Must be a boolean value
    */
    function setSaleState(uint16 _sale_state) public onlyOwner {
        sale_state = _sale_state;
    }

    /*
    *   @dev Sets the state of paused for emergency
    * Requirements:
    * - `_state` Must be a boolean value
    */
    function togglePaused() public onlyOwner {
        paused = !paused;
    }

    /*
    *   @dev Sets the BASE_URL for tokenURI
    * Requirements:
    * - `_url` Must be in the form: ipfs//hash/
    */
    function setBaseURL(string memory _url) public onlyOwner {
        BASE_URL = _url;
    }

    function withdraw() public payable onlyOwner {
        (bool os,)= payable(PRIMARY).call{value:address(this).balance}("");
        require(os);
    }
}