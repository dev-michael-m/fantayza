import './App.css';
import Hero from './components/Hero';
import Footer from './pages/Footer';
import MainApp from './pages/MainApp';
import { ConnectWallet, getSoldOut } from './utilities/util';
import { useEffect, useState } from 'react';
import AlertBar from './components/AlertBar';
import Button from '@mui/material/Button';
import CustomModal from './components/Modal';
import MetaMaskLogo from './assets/metamask-icon.jpg';
import ImgPlaceholder from './assets/image-placeholder.jpg';
import FadeInContainer from './components/FadeInContainer';
import NFT1 from './assets/1.png';
import NFT2 from './assets/2.png';
import NFT3 from './assets/3.png';
import NFT4 from './assets/4.png';
import NFT5 from './assets/5.png';
import NFT6 from './assets/6.png';
import NFT7 from './assets/7.png';

function App() {
  
  const [alert,setAlert] = useState({
    severity: 'success',
    msg: '',
    visible: false
  });

  const [wallet, setWallet] = useState({
    address: null,
    provider: null,
    snippet: null,
  });

  const [modalOpen,setModalOpen] = useState(false);
  const [soldOut,setSoldOut] = useState(false);

    useEffect(() => {
      let mounted = true;

      if (mounted) {
        (async() => {
          const sold_out = await getSoldOut();

          if(sold_out.data){
            setSoldOut(true);
          }
        })();

        const connected = sessionStorage.getItem('connected');

        if(connected === 'true'){
          
          ConnectWallet()
          .then((status) => {
            setWallet({
              address: status.address,
              snippet: status.address_snippet,
            });
            window.ethereum.on("accountsChanged", handleAccountsChanged);
          })
          .catch((error) => {
            console.error(error);
          });
        }
      }
        

      return () => {
        mounted = false;
      };
    }, []);

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

  const onConnectWallet = (suppress) => {
    setModalOpen(true);
  };

  const onWalletClick = async (event) => {
    const selected = event.target.id;

    ConnectWallet()
      .then((status) => {
        setWallet({
          address: status.address,
          snippet: status.address_snippet,
        });
        setModalOpen(false);
        window.sessionStorage.setItem('connected',true);
      })
      .catch((error) => {
        console.error(error);
      });

      window.ethereum.on("accountsChanged", handleAccountsChanged);
  }

  const onModalClose = () => {
    setModalOpen(false);
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

  return (
    <div className="App">
        <MainApp wallet={wallet} onConnectWallet={onConnectWallet} onAlert={onAlert}>
          {alert.visible ? <AlertBar severity={alert.severity} visible={alert.visible} msg={alert.msg} onClose={onCloseAlert} /> : null}
          <CustomModal id="wallet-connect" visible={modalOpen} width='332px' onClose={onModalClose}>
              <h3>Connect Wallet</h3>
              <Button className="wallet-button" id="metamask" variant='contained' onClick={onWalletClick} endIcon={
                <img id="metamask" src={MetaMaskLogo} width="42px"></img>
              }>MetaMask</Button>          
          </CustomModal>
          <div className="main-container parallax-container">
            <div className="inner-main">
              <Hero onConnectWallet={onConnectWallet} soldOut={soldOut} wallet={wallet} onAlert={onAlert} />
              <div className="body-container">
                  <h2 style={{color: 'black'}}>LEGENDARY LARVA LORDS</h2>
                  <div style={{color: 'gray',display: 'flex',flexWrap: 'wrap',justifyContent: 'center'}}>
                    <FadeInContainer animation="fade-in">
                      <div className='highlight-img'>
                        <img style={{boxShadow: '0px 2px 10px black'}} src={NFT1} width="200px"></img>
                        <p>King Larva</p>
                        <p style={{margin: 0}}>Prize: 1.0 ETH</p>
                      </div>
                    </FadeInContainer>
                    <FadeInContainer animation="fade-in">
                      <div className='highlight-img'>
                        <img style={{boxShadow: '0px 2px 10px black'}} src={NFT2} width="200px"></img>
                        <p>Alien Larva</p>
                        <p style={{margin: 0}}>Prize: 0.75 ETH</p>
                      </div>
                    </FadeInContainer>
                    <FadeInContainer animation="fade-in">
                      <div className='highlight-img'>
                        <img style={{boxShadow: '0px 2px 10px black'}} src={NFT3} width="200px"></img>
                        <p>Joker Larva</p>
                        <p style={{margin: 0}}>Prize: 0.75 ETH</p>
                      </div>
                    </FadeInContainer>
                    <FadeInContainer animation="fade-in">
                      <div className='highlight-img'>
                        <img style={{boxShadow: '0px 2px 10px black'}} src={NFT4} width="200px"></img>
                        <p>Naruto Larva</p>
                        <p style={{margin: 0}}>Prize: 0.5 ETH</p>
                      </div>
                    </FadeInContainer>
                    <FadeInContainer animation="fade-in">
                      <div className='highlight-img'>
                        <img style={{boxShadow: '0px 2px 10px black'}} src={NFT5} width="200px"></img>
                        <p>Rick Larva</p>
                        <p style={{margin: 0}}>Prize: 0.5 ETH</p>
                      </div>
                    </FadeInContainer>
                    <FadeInContainer animation="fade-in">
                      <div className='highlight-img'>
                        <img style={{boxShadow: '0px 2px 10px black'}} src={NFT6} width="200px"></img>
                        <p>Mario Larva</p>
                        <p style={{margin: 0}}>Prize: 0.25 ETH</p>
                      </div>
                    </FadeInContainer>
                    <FadeInContainer animation="fade-in">
                      <div className='highlight-img'>
                        <img style={{boxShadow: '0px 2px 10px black'}} src={NFT7} width="200px"></img>
                        <p>Red Skull Larva</p>
                        <p style={{margin: 0}}>Prize: 0.25 ETH</p>
                      </div>
                    </FadeInContainer>
                  </div>                           
              </div>              
              <Footer />
            </div>            
          </div>          
        </MainApp>
    </div>
  );
}

export default App;
