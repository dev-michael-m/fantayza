import React, {useState} from 'react';
import NavBar from '../components/NavBar';
import CustomModal from '../components/Modal';
import Button from '@mui/material/Button';
import AlertBar from '../components/AlertBar';
import { ConnectWallet } from '../utilities/util';
import MetaMaskLogo from '../assets/metamask-icon.jpg';

const MainApp = ({children}) => {
    const [modalOpen,setModalOpen] = useState(false);
    const [wallet, setWallet] = useState({
        address: null,
        provider: null,
        snippet: null,
    });
    const [alert,setAlert] = useState({
        severity: 'success',
        msg: '',
        visible: false
    });

    async function handleAccountsChanged(accounts) {
        if (accounts.length === 0) {
            console.warn("user has not connected to metamask");
        } else {
            setWallet((prevState) => ({
            ...prevState,
            address: accounts[0]
            }));
        }
    }

    const onAlert = (severity, msg, visible) => {
        setAlert({
          severity,
          msg,
          visible
        })
      }
    
      const onCloseAlert = () => {
        setAlert(prevState => ({
          ...prevState,
          visible: false
        }))
      }

    const onModalClose = () => {
        setModalOpen(false);
    }
  
    const onConnectWallet = (suppress) => {
      setModalOpen(true);
    };

    const onWalletClick = async (event) => {
        const selected = event.target.id;
    
        ConnectWallet()
          .then((status) => {
            console.log({status})
            setWallet({
              address: status.address,
              snippet: status.address_snippet,
            });
            setModalOpen(false);
            window.sessionStorage.setItem('connected',true);
          })
          .catch((error) => {
            console.error(error);
            setModalOpen(false);
          });
    
          window.ethereum.on("accountsChanged", handleAccountsChanged);
      }

    return (
        <div>
            <NavBar wallet={wallet} onAlert={onAlert} onConnectWallet={onConnectWallet} />

            <CustomModal id="wallet-connect" visible={modalOpen} width='332px' onClose={onModalClose}>
              <h3>Connect Wallet</h3>
              <Button className="wallet-button" id="metamask" variant='contained' endIcon={
                <img id="metamask" src={MetaMaskLogo} width="42px"></img>
              } onClick={onWalletClick}>MetaMask</Button>          
            </CustomModal>

            {alert.visible ? <AlertBar severity={alert.severity} visible={alert.visible} msg={alert.msg} onClose={onCloseAlert} /> : null}

            {children}
        </div>
    )
}

export default MainApp;