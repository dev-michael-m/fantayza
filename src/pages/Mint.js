import React, {useState,useEffect} from 'react';
import CustomModal from './../components/Modal';
import CheckIcon from '@mui/icons-material/CheckCircleOutline';
import Button from '@mui/material/Button';
import AlertBar from './../components/AlertBar';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import MinusIcon from '@mui/icons-material/Remove';
import { connectWalletAsync, MintNFT } from '../utilities/util';
import '../stylesheet/Mint.css';

const NETWORK = 'ropsten.etherscan';
const NUM_TOKENS = 1;
const MAX_MINT = 3;

const Mint = () => {
    const [minting,setMinting] = useState(false);
    const [wallet, setWallet] = useState({
        address: null
    });
    const [txn,setTxn] = useState(null);
    const [mintNum,setMintNum] = useState(MAX_MINT - 1);
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
            MintNFT(NUM_TOKENS, wallet.address).then(res => {
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
                        <h1 style={{color: 'white', fontSize: 50, margin: '24px 0px'}}>Mint is now live!</h1>
                        <div className='mint-input-wrapper spacing-small'>
                            <IconButton className='mint-btn' onClick={handleMinus}>
                                <MinusIcon style={{color: 'white'}} />
                            </IconButton>
                            <TextField className='mint-input' disabled variant="outlined" value={mintNum} type="number" />
                            <IconButton className='mint-btn' onClick={handleAdd}>
                                <AddIcon style={{color: 'white'}} />
                            </IconButton>
                        </div>                     
                        <div className='spacing-small'>
                            <Button
                                style={{height: 36}}
                                className='custom-button accent small'
                                variant="contained"
                                onClick={wallet.address ? onMint : handleWalletConnect}
                                disabled={minting ? true : false}
                            >
                                {minting ? <CircularProgress /> : wallet.address ? 'mint' : 'connect wallet'}
                            </Button>
                        </div>   
                        <div className='flex-align-center flex-column'>
                            <h2 style={{color: 'white'}}>Price - 0.06 ETH + Gas</h2>
                        </div>
                    </div>                    
                </div>
            </div>          
        </div>
    )
}

export default Mint;