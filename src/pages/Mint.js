import React, {useState,useEffect} from 'react';
import CustomModal from './../components/Modal';
import CheckIcon from '@mui/icons-material/CheckCircleOutline';
import Button from '@mui/material/Button';
import AlertBar from './../components/AlertBar';
import CircularProgress from '@mui/material/CircularProgress';
import { mintNFT } from '../utilities/util';
import { ethers } from 'ethers';

const NETWORK = 'ropsten.etherscan';
const NUM_TOKENS = 1;

const Mint = () => {
    const [minting,setMinting] = useState(false);
    const [wallet, setWallet] = useState({
        connected: false
    });
    const [txn,setTxn] = useState(null);
    const [modalOpen,setModalOpen] = useState(false);
    const [alert,setAlert] = useState({
        severity: 'success',
        msg: '',
        visible: false
    });

    useEffect(() => {
        let mounted = true;

        if(mounted){
            const _connected = window.sessionStorage.getItem('connected');

            if(_connected){
                setWallet({
                    connected: true
                })
            }
        }

        return () => {
            mounted = false;
        }
    },[]);

    const onModalClose = () => {
        setModalOpen(false);
    }

    const onMintNFT = async () => {
        const _connected = window.sessionStorage.getItem('connected');

        if(wallet.connected || _connected){
            mintNFT('public',NUM_TOKENS).then(res => {
                const txHash = res.data;
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const progress = setInterval(() => {
                    provider.getTransactionReceipt(txHash).then(status => {
                        if(!status){
                            //console.log({status})
                        }else if(status.status){
                            setTxn(status.transactionHash);
                            setMinting(false);
                            setModalOpen(true);
                            clearInterval(progress);
                        }
                    }).catch(error => {
                        console.error(error);
                        clearInterval(progress);
                        setMinting(false);
                    });
                },1000)
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
                msg: `Please connect your wallet before minting.`
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

    return(
        <div>
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
            <div className='project-background2'>
                {alert.visible ? <AlertBar severity={alert.severity} visible={alert.visible} msg={alert.msg} onClose={onCloseAlert} /> : null}
                <div style={{padding: '200px 24px'}}>
                    <div className='flex-align-center flex-column'>
                        <h1 style={{color: 'white', fontSize: 50, margin: '24px 0px'}}>Minting is Now Open!</h1>
                        <div style={{margin: '100px 0px'}}>
                            <Button
                                style={{height: 36}}
                                className='custom-button accent small'
                                variant="contained"
                                onClick={onMintNFT}
                                disabled={minting ? true : false}
                            >
                                {minting ? <CircularProgress /> : 'mint'}
                            </Button>
                        </div>                        
                        <div className='flex-align-center flex-column'>
                            <h2 style={{color: 'white'}}>Price - 0.175 ETH + Gas Fees</h2>
                            <h2 style={{color: 'white'}}>1 NFT per Address</h2>
                        </div>
                    </div>                    
                </div>
            </div>          
        </div>
    )
}

export default Mint;