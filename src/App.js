import './App.css';
import Hero from './components/Hero';
import Footer from './pages/Footer';
import MainApp from './pages/MainApp';
//import { ConnectWallet, getSoldOut, getPublicState } from './utilities/util';
import { useEffect, useState } from 'react';
import AlertBar from './components/AlertBar';
import Button from '@mui/material/Button';
import CustomModal from './components/Modal';
import MetaMaskLogo from './assets/metamask-icon.jpg';
import ImgPlaceholder from './assets/image-placeholder.jpg';
import FadeInContainer from './components/FadeInContainer';
import FAQs from './components/FAQs';
import Roadmap from './components/Roadmap';

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
  const [saleActive,setSaleActive] = useState(false);
  const [pubSale,setPubSale] = useState(false);

    // useEffect(() => {
    //   let mounted = true;

    //   if (mounted) {
    //     (async() => {
    //       const sold_out = await getSoldOut();

    //       if(sold_out.data){
    //         setSoldOut(true);
    //       }else{
    //         const publicSale = await getPublicState();
  
    //         if(publicSale.status){
    //           if(publicSale.active){
    //               setSaleActive(true);
    //               setPubSale(publicSale.active);
    //           }          
    //         }
    //       }
    //     })();

    //     const connected = sessionStorage.getItem('connected');

    //     if(connected === 'true'){
          
    //       ConnectWallet()
    //       .then((status) => {
    //         setWallet({
    //           address: status.address,
    //           snippet: status.address_snippet,
    //         });
    //         window.ethereum.on("accountsChanged", handleAccountsChanged);
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //     }
    //   }
        

    //   return () => {
    //     mounted = false;
    //   };
    // }, []);

    // async function handleAccountsChanged(accounts) {
    //   if (accounts.length === 0) {
    //     console.warn("user has not connected to metamask");
    //   } else {
    //     setWallet((prevState) => ({
    //       ...prevState,
    //       address: accounts[0]
    //     }));
    //   }
    // }

  const onConnectWallet = (suppress) => {
    setModalOpen(true);
  };

  // const onWalletClick = async (event) => {
  //   const selected = event.target.id;

  //   ConnectWallet()
  //     .then((status) => {
  //       setWallet({
  //         address: status.address,
  //         snippet: status.address_snippet,
  //       });
  //       setModalOpen(false);
  //       window.sessionStorage.setItem('connected',true);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  //     window.ethereum.on("accountsChanged", handleAccountsChanged);
  // }

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
        <MainApp onAlert={onAlert}>
          {alert.visible ? <AlertBar severity={alert.severity} visible={alert.visible} msg={alert.msg} onClose={onCloseAlert} /> : null}
          <CustomModal id="wallet-connect" visible={modalOpen} width='332px' onClose={onModalClose}>
              <h3>Connect Wallet</h3>
              <Button className="wallet-button" id="metamask" variant='contained' endIcon={
                <img id="metamask" src={MetaMaskLogo} width="42px"></img>
              }>MetaMask</Button>          
          </CustomModal>
          <div className="main-container parallax-container">
            <div className="inner-main">
              <Hero soldOut={soldOut} saleActive={saleActive} pubSale={pubSale} wallet={wallet} onAlert={onAlert} />

                <div className='spacing-medium'>
                  <div className='primary-section'>
                      <FadeInContainer animation="fade-in">
                        <div className='video-container'>

                        </div>
                      </FadeInContainer>
                      <FadeInContainer animation="fade-in">
                        <div className='flex-just-between flex-align-center'>
                          <div>
                            <img src={ImgPlaceholder} width="200px"></img>
                          </div>
                          <div style={{width: '75%'}}>
                            <h2 className='text-left'>About the Artist</h2>
                            <p>
                              Ahmed Safer, born in Kuwait, is a prominent visual artist and designer. As Ahmed describes his art as a "worlds of imagination"
                              he was always fascinated by the way "art engages the observer. The way art can tell a story, and the observer reacts to that story.
                              How art would create an alternate dimension for the artist and observer alike". Having graduated from university of 3D Animation and VFX
                              (Streaming in Modeling) - Vancouver Film School, Ahmed has also participated in various galleries worldwide.
                            </p>
                          </div>
                        </div>
                      </FadeInContainer>
                    </div>
                </div>
                  
                <div className='spacing-medium'>
                  <div className='primary-section'>
                    <div className='flex-align-center'>
                      <div style={{width: '50%'}}>
                        <FadeInContainer animation="fade-left">
                          <div>
                            <img src={ImgPlaceholder} width="400px"></img>
                          </div>
                        </FadeInContainer>
                      </div>
                      <div style={{width: '50%'}}>
                        <FadeInContainer animation="fade-right">
                          <div className='text-left'>
                            <h2>What Makes Fantayza's World Special?</h2><br></br>
                            <h3>Transparency</h3>
                            <p>All owners are fully doxxed to ensure complete transparency and honesty.</p><br></br>
                            <h3>Community</h3>
                            <p>
                              Without a strong community, the project would not be successful.  Community is the key element, where our community
                              will grow with collaborations with other artists and NFT projects.
                            </p><br></br>
                            <h3>Holders Power</h3>
                            <p>
                              Holders will have full control of the project. Holders will get voting power over suggesting ideas about the projects future
                              endeavors.
                            </p>
                          </div>
                        </FadeInContainer>
                      </div>                      
                    </div>                    
                  </div>
                </div>

                <div className='spacing-medium'>

                </div>

                <div className='spacing-medium'>
                  <div className='primary-section'>
                    <Roadmap />
                  </div>
                </div>

                <div className='spacing-medium'>

                </div>
                  
                  
                <FAQs />           
              <Footer />
            </div>            
          </div>          
        </MainApp>
    </div>
  );
}

export default App;
