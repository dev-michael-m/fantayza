import { ethers } from "ethers";

require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;
console.log(CONTRACT_ADDRESS);
console.log(alchemyKey)
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = require('../contract-abi.json');

export const larvaContract = new web3.eth.Contract(contractABI, CONTRACT_ADDRESS)

export const CheckAdmin = () => {
    return new Promise(async(resolve,reject) => {
        if(window.ethereum.request({method: 'eth_requestAccounts'})){
            try{
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                
                if(address === process.env.REACT_APP_F1_ADDRESS){
                    resolve({status: 'success',msg: 'Verified'});
                }else{
                    reject({msg: `You do not have access to this page.`,status: 'error'})
                }
            }catch(error) {
                reject({msg: error, status: 'error'});
            }            
        }else{
            reject({msg: `You must connect your MetaMask wallet to be verified.`,status: 'warning'})
        }
    })
}

//* Web3 Contract Interactive Methods

export const ConnectWallet = async () => {
    return new Promise(async(resolve,reject) => {
        if(window.ethereum.request({method: 'eth_requestAccounts'})){
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                const balance = await provider.getBalance(address);
                const eth = ethers.utils.formatEther(balance);
                
                resolve({
                    status: 'success',
                    msg: 'Wallet connected',
                    address: address,
                    balance: eth
                })
            } catch (error) {
                console.error(error);
                reject({
                    status: 'error',
                    msg: 'Something went wrong. Try waiting a minute and try again.'
                })                
            }
        }else{
            reject({
                status: 'warning',
                msg: 'Wallet is not connected.  Please make sure to connect your wallet and try again.'
            })
        }
    })    
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
            const minted = await larvaContract.methods._tokenIds().call();
            const max_supply = await larvaContract.methods.MAX_SUPPLY().call();

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

export const setSaleState = (active,sale_type) => {
    return new Promise(async(resolve,reject) => {
        try{
            if(window.ethereum.request({method: 'eth_requestAccounts'})){
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const address = await signer.getAddress();

                if(sale_type === 'presale'){
                    const status = await larvaContract.methods.setPresale(active).send({
                        from: address
                    })
                    resolve(status);
                }else if(sale_type === 'public'){
                    const status = await larvaContract.methods.setPublicSale(active).send({
                        from: address
                    })
                    resolve(status);
                }
            }else{
                reject({status: false})
            }
        } catch(error) {
            reject({status: false})
        }
    })        
}

export const pauseContract = (contractState) => {
    return new Promise(async(resolve,reject) => {
        try {
            const status = await larvaContract.methods.setPaused(contractState).send({
                from: process.env.REACT_APP_F1_ADDRESS
            })

            resolve({
                status: 'success',
                data: status
            })
        } catch (error) {
            console.error(`util.pauseContract: ${error}`);
            reject({
                status: 'error',
                msg: error
            })
        }
    })
}

export const getPaused = () => {
    return new Promise(async(resolve,reject) => {
        try {
            const paused = await larvaContract.methods.paused().call();

            resolve({
                status: 'success',
                data: paused
            })
        } catch (error) {
            console.error(`util.getPaused: ${error}`);
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
            const active = await larvaContract.methods.active().call();
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

export const getMintPrice = () => {
    return new Promise(async(resolve,reject) => {
        try {
            const mint_price = await larvaContract.methods.SALE_PRICE().call();
            resolve({
                status: 'success',
                data: mint_price
            })
        } catch (error) {
            console.error(`util.getMintPrice: ${error}`);
            reject({
                status: 'error',
                msg: error
            })
        }
    })
}

export const getMaxMint = () => {
    return new Promise(async(resolve,reject) => {
        try {
            const max_mint = await larvaContract.methods.MAX_MINT().call();
            resolve({
                status: 'success',
                data: max_mint
            })
        } catch (error) {
            console.error(`util.getMintPrice: ${error}`);
            reject({
                status: 'error',
                msg: error
            })
        }
    })
}

export const mintNFT = async (sale_type, num_tokens) => {
    return new Promise(async(resolve,reject) => {
        try {
            if(window.ethereum.request({method: 'eth_requestAccounts'})){
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                const price = await larvaContract.methods.SALE_PRICE().call();
                const mint_price = parseFloat(web3.utils.fromWei(price,'ether'));
                
                if(sale_type === 'public'){
                    const public_active = await getPublicState();

                    if(public_active){
                        const tx = {
                            from: address,
                            to: process.env.REACT_APP_CONTRACT_ADDRESS,
                            value: web3.utils.toHex(web3.utils.toWei(String((mint_price * num_tokens).toFixed(3)),'ether')),
                            data: larvaContract.methods.mint(num_tokens).encodeABI(),
                        }

                        const txHash = await window.ethereum.request({
                            method: 'eth_sendTransaction',
                            params: [tx]
                        })

                        resolve({data: txHash});
                        
                    }else{
                        reject({msg: `Public sale is currently inactive.`, status: 'warning'})
                    }
                }else{
                    reject({msg: `Sale is currently inactive.`, status: 'warning'})
                }                
            }else{
                reject({
                    status: 'warning',
                    msg: `You must connect your MetaMask wallet to continue.  If you don't have a Metamask wallet, follow this link to get started LINK`
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