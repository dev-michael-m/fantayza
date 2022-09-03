const {ethers} = require('ethers');

require('dotenv').config();
const _alkk = process.env.REACT_APP_ALKK;
const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(_alkk);
const contractABI = require('../contract-abi.json');

const DECIMALS = 2;

export const _contract = new web3.eth.Contract(contractABI, CONTRACT_ADDRESS)

export const FormatNumber = (_num) => {
    return _num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const MaskAddress = (full_address = '') => {
    try {
        const first_half = full_address.substring(0,5);
        const second_half = full_address.substring(full_address.length - 4);
        return `${first_half}...${second_half}`;
    } catch (error) {
        console.error(error);
    }
}

export const connectWalletAsync = () => {
    return new Promise(async(resolve,reject) => {
        if(window.ethereum.request({method: 'eth_requestAccounts'})){
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const address = await signer.getAddress();
    
                resolve({status: true, address: address});
            } catch (error) {
                console.error(error);
                reject({status: false, msg: error});
            }
        }else{
            console.warn('users wallet is not connected');
            reject({status: false, msg: 'users wallet is not connected'});
        }
    })    
}

export const MintNFT = async (_num, _address) => {
    return new Promise(async(resolve,reject) => {
        try {
            if(_address){
                const _saleState = await _contract.methods.sale_state().call();
                
                if(_saleState == 1){    // wl mint
                    const tx = {
                        from: _address,
                        to: process.env.REACT_APP_CONTRACT_ADDRESS,
                        value: '0x0',
                        data: _contract.methods.presale(_num).encodeABI(),
                    }

                    const txHash = await window.ethereum.request({
                        method: 'eth_sendTransaction',
                        params: [tx]
                    })

                    resolve({data: txHash});
                }else if(_saleState == 2){  // public sale
                    const tx = {
                        from: _address,
                        to: process.env.REACT_APP_CONTRACT_ADDRESS,
                        value: '0x0',
                        data: _contract.methods.pubMint(_num).encodeABI(),
                    }

                    const txHash = await window.ethereum.request({
                        method: 'eth_sendTransaction',
                        params: [tx]
                    })

                    resolve({data: txHash});
                }else{
                    reject({msg: `Sale is currently inactive.`, status: 'warning'})
                }                
            }else{
                reject({
                    status: 'warning',
                    msg: `You must connect your MetaMask wallet to continue.  If you don't have a Metamask wallet, follow this link to get started https://metamask.io/`
                })
            }    
        } catch (error) {
            console.error(`util.mintNFT: ${error}`)
            reject({
                status: 'error',
                msg: error.message
            })
        }
    })
    
  }