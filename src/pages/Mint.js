import React, {useState,useEffect} from 'react';
import CustomModal from './../components/Modal';
import CheckIcon from '@mui/icons-material/CheckCircleOutline';
import Button from '@mui/material/Button';
import AlertBar from './../components/AlertBar';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OSIcon from '../assets/opensea.png';
import AddIcon from '@mui/icons-material/Add';
import MinusIcon from '@mui/icons-material/Remove';
import { connectWalletAsync, MintNFT } from '../utilities/util';
import {ethers} from 'ethers';
import '../stylesheet/Mint.css';

const NETWORK = 'etherscan';
const MAX_MINT = 2;

const Mint = () => {
    const [minting,setMinting] = useState(false);
    const [wallet, setWallet] = useState({
        address: null
    });
    const [txn,setTxn] = useState(null);
    const [mintNum,setMintNum] = useState(MAX_MINT);
    const [modalOpen,setModalOpen] = useState(false);
    const [alert,setAlert] = useState({
        severity: 'success',
        msg: '',
        visible: false
    });

    const onModalClose = () => {
        setModalOpen(false);
    }

    const handleAdd = () => {
        if(mintNum < MAX_MINT){
            setMintNum(prevState => prevState + 1);
        }
    }

    const handleMinus = () => {
        if(mintNum > 1){
            setMintNum(prevState => prevState - 1);
        }
    }

    const onMint = async () => {
        if(wallet.address){
            MintNFT(mintNum, wallet.address).then(res => {
                const txHash = res.data;
                setTxn(txHash);
                setMinting(false);
                setModalOpen(true);
            }).catch(error => {
                setAlert({
                    visible: true,
                    severity: error.status,
                    msg: error.msg
                })

                setMinting(false);
            })
        }else{
            setAlert({
                visible: true,
                severity: 'warning',
                msg: `Please connect your wallet before attempting to mint.`
            })
            setMinting(false);
        }
    }

    const onCloseAlert = () => {
        setAlert(prevState => ({
          ...prevState,
          visible: false
        }))
      }
    
    const handleWalletConnect = async () => {
        connectWalletAsync().then(res => {
            if(res.status){
                setWallet({
                    address: res.address
                })
            }
        }).catch(error => {
            console.error(error.msg);
            setAlert({
                visible: true,
                severity: 'warning',
                msg: `${error.msg}`
            })
        })
    }

    return(
        <div className='mint-container'>
            {txn ? (
                <CustomModal
                    id="mint-success"
                    width="352px"
                    visible={modalOpen}
                    onClose={onModalClose}
                >
                    <h1 style={{ textAlign: "center" }}>Mint Successful!</h1>
                    <CheckIcon className="check-success" />
                    <p>
                        You can find more details about your transaction by clicking{" "}
                        <a
                            style={{ color: "#d2bb90" }}
                            href={`https://${NETWORK}.io/tx/${txn}`}
                            target="_blank"
                        >
                            here
                        </a>
                    </p>
                </CustomModal>
            ) : null}
            <div className='flex-align-center flex-just-center' style={{height: '100%'}}>
                {alert.visible ? <AlertBar severity={alert.severity} visible={alert.visible} msg={alert.msg} onClose={onCloseAlert} /> : null}
                <div className='mint-wrapper'>
                    <div className='flex-align-center flex-column'>
                        <h1 style={{color: 'white', fontSize: 50, margin: '24px 0px'}}>SOLD OUT</h1>
                        <div className='spacing-small'>
                            <Button className='custom-button accent small' variant='contained' onClick={() => document.getElementById('opensea-link').click()}>get yours on opensea</Button>
                        </div>   
                        <div className='flex-align-center flex-column'>
                            <h2 style={{color: 'white'}}>SOLD OUT</h2>
                        </div>
                    </div>                    
                </div>
            </div>  
            <a id="opensea-link" href='https://opensea.io/collection/fantazya-the-revival' hidden target="_blank"></a>        
        </div>
    )
}

export default Mint;