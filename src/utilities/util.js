import { ethers } from "ethers";

require('dotenv').config();
const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;
const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;
const contractABI = require('../contract-abi.json');

export const fantazyaContract = new ethers.Contract(CONTRACT_ADDRESS,contractABI);

const wl = [
    
]

//* Web3 Contract Interactive Methods

export const ConnectWallet = async () => {
    return new Promise(async(resolve,reject) => {  
        try {
            const address = await window.ethereum.request({method: 'eth_requestAccounts'});    
            console.log(address[0]);   
            resolve({
                status: 'success',
                msg: 'Wallet connected',
                address: MaskAddress(address[0])
            })  
        } catch (error) {
            console.error(error);
            reject({
                status: 'error',
                msg: 'Something went wrong. Try waiting a minute and try again.'
            })
        }
    })    
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

export const connectWalletSync = async () => {
    if(window.ethereum.request({method: 'eth_requestAccounts'})){
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            const balance = await provider.getBalance(address);
            const eth = ethers.utils.formatEther(balance);

            return {
                address,
                balance,
                eth
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    }else{
        console.warn('users wallet is not connected');
        return null;
    }
}

export const getSoldOut = async () => {
    return new Promise(async(resolve,reject) => {
        try {
            // calls api twice here
            const minted = await fantazyaContract.methods._tokenIds().call();
            const max_supply = await fantazyaContract.methods.MAX_SUPPLY().call();

            resolve({
                status: 'success',
                msg: 'success',
                data: parseInt(minted) < parseInt(max_supply) ? false : true
            })
        } catch (error) {
            reject({
                status: 'error',
                msg: error
            })
        }
    })
}

export const getPublicState = () => {
    return new Promise(async(resolve,reject) => {
        try{
            const active = await fantazyaContract.methods.active().call();
            resolve({
                status: true,
                active: active
            });
        } catch(error){
            console.error(`util.getSaleActive: ${error}`);
            reject({
                status: false,
                msg: error
            });
        }
    })
}

export const getPresaleState = () => {
    return new Promise(async(resolve,reject) => {
        try{
            const active = await fantazyaContract.methods.presale().call();
            resolve({
                status: true,
                active: active
            });
        } catch(error){
            console.error(`util.getSaleActive: ${error}`);
            reject({
                status: false,
                msg: error
            });
        }
    })
}

// export const mintNFT = async (sale_type, num_tokens) => {
//     return new Promise(async(resolve,reject) => {
//         try {
//             if(window.ethereum.request({method: 'eth_requestAccounts'})){
//                 const provider = new ethers.providers.Web3Provider(window.ethereum);
//                 const signer = provider.getSigner();
//                 const address = await signer.getAddress();
//                 const price = await fantazyaContract.methods.SALE_PRICE().call();
//                 const mint_price = parseFloat(ethers.utils.formatEther(price));
                
//                 if(sale_type === 'public'){
//                     const public_active = await getPublicState();

//                     if(public_active){
//                         const tx = {
//                             from: address,
//                             to: process.env.REACT_APP_CONTRACT_ADDRESS,
//                             value: ethers.utils.hexValue(ethers.utils.formatEther(String((mint_price * num_tokens).toFixed(3)))),
//                             data: fantazyaContract.methods.mint(num_tokens).encodeABI(),
//                         }

//                         const txHash = await window.ethereum.request({
//                             method: 'eth_sendTransaction',
//                             params: [tx]
//                         })

//                         resolve({data: txHash});
                        
//                     }else{
//                         reject({msg: `Public sale is currently inactive.`, status: 'warning'})
//                     }
//                 }                
//             }else{
//                 reject({
//                     status: 'warning',
//                     msg: `You must connect your MetaMask wallet to continue.  If you don't have a Metamask wallet, follow this link to get started LINK`
//                 })
//             }    
//         } catch (error) {
//             console.error(`util.mintNFT: ${error}`)
//             reject({
//                 status: 'error',
//                 msg: error.message
//             })
//         }
//     })
    
//   }