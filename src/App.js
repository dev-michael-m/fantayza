import './App.css';
import './stylesheet/Sections.css';
import { ConnectWallet, getSoldOut, getPublicState } from './utilities/util';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import MetaMaskLogo from './assets/metamask-icon.jpg';
import ArtistVidMP4 from './assets/FNFT_ArtistVideo.mp4';
import NFT16 from './assets/16_Resized.png';
import ArtistImg from './assets/FNFT_Artist_Resized.jpg';
import BodyImg from './assets/FNFT_Character_Body2.png';
import loadable from '@loadable/component';
import $ from 'jquery';

const AlertBar = loadable(() => import('./components/AlertBar'));
const CustomModal = loadable(() => import('./components/Modal'));
const FadeInContainer = loadable(() => import('./components/FadeInContainer'));
const FAQs = loadable(() => import('./components/FAQs'));
const Roadmap = loadable(() => import('./components/Roadmap'));
const Founders = loadable(() => import('./components/Founders'));
const Footer = loadable(() => import('./pages/Footer'));
const MainApp = loadable(() => import('./pages/MainApp'));
const Hero = loadable(() => import('./components/Hero'));

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
  const [loaded,setLoaded] = useState([]);
  const [extReady,setExtReady] = useState(false);

    useEffect(() => {
      let mounted = true;

      if (mounted) {
        // (async() => {
        //   const sold_out = await getSoldOut();

        //   if(sold_out.data){
        //     setSoldOut(true);
        //   }else{
        //     const publicSale = await getPublicState();
  
        //     if(publicSale.status){
        //       if(publicSale.active){
        //           setSaleActive(true);
        //           setPubSale(publicSale.active);
        //       }          
        //     }
        //   }
        // })();

        // const connected = sessionStorage.getItem('connected');

        // if(connected === 'true'){
          
        //   ConnectWallet()
        //   .then((status) => {
        //     setWallet({
        //       address: status.address,
        //       snippet: status.address_snippet,
        //     });
        //     window.ethereum.on("accountsChanged", handleAccountsChanged);
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //   });
        // }
        loadImages();
      }
        

      return () => {
        mounted = false;
      };
    }, []);

    const loadImages = () => {
      let src = $('inner-hero').css('background-image')
      let url = '../assets/FNFT_Website01.jpg';
      let img = new Image();

      img.onLoad = () => {
        console.log('image loaded');
      }

      img.src = url;
      if(img.complete) img.onLoad();
    }

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

  // const isLoaded = (idx) => {
  //   console.log(loaded.indexOf(idx))
  //   return loaded.indexOf(idx) >= 0 ? true : false;
  // }

  // const onLoad = (idx) => {
  //   console.log(`loading ${idx}`)
  //   setLoaded(prevState => [...prevState,idx]);
  // }

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
        <MainApp onAlert={onAlert} onConnectWallet={onConnectWallet} wallet={wallet}>
          {alert.visible ? <AlertBar severity={alert.severity} visible={alert.visible} msg={alert.msg} onClose={onCloseAlert} /> : null}
          <CustomModal id="wallet-connect" visible={modalOpen} width='332px' onClose={onModalClose}>
              <h3>Connect Wallet</h3>
              <Button className="wallet-button" id="metamask" variant='contained' endIcon={
                <img id="metamask" src={MetaMaskLogo} width="42px"></img>
              } onClick={onWalletClick}>MetaMask</Button>          
          </CustomModal>
          <div className="main-container parallax-container">
            <div className="inner-main">
              <Hero soldOut={soldOut} saleActive={saleActive} pubSale={pubSale} wallet={wallet} onAlert={onAlert} />

              
              <div id="artist-bio" className='artist-bio'>
                <div className='spacing-medium'>
                    <div className='primary-section'>
                      <FadeInContainer animation="fade-in">
                        <div className='video-container'>
                          <video width="100%" controls autoPlay loop>
                            <source src={ArtistVidMP4} type='video/mp4'></source>
                          </video>
                        </div>
                      </FadeInContainer>
                      <FadeInContainer animation="fade-in">
                        <div className='flex-just-between flex-align-center artist-doc'>
                          <div>
                            <img className='box-shadow' src={ArtistImg} width="200px"></img>
                          </div>
                          <div className='inner-body-text'>
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
              </div>
              
              
              
              
              <div id="project-background" className='project-background'>
                <div className='spacing-medium'>
                  <div className='primary-section'>
                    <div className='flex-align-center section-2'>
                      <div id="section-2-img" className='section-2-img'>
                        <FadeInContainer animation="fade-left">
                          <div>
                            <img style={{transform: 'scale(1.75)', paddingRight: 100, paddingBottom: 64}} src={BodyImg} width="368px"></img>
                          </div>
                        </FadeInContainer>
                      </div>
                      <div className='inner-body-text'>
                        <FadeInContainer animation="fade-right">
                          <div className='text-left'>
                            <h2>What Makes Fantazya's World Special?</h2><br></br>
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
                </div>
              
                
                
              
              <div id="project-background2" className='project-background2'>
                  <div className='spacing-medium'>
                  <div className='primary-section flex-align-center section-3'>
                    <div className='circle-container'>
                      <FadeInContainer animation="fade-left">
                        <div className='circle-medium'></div>
                        <div className='circle-large'>
                          <div className='circle-inner'>
                            <p>Fantazya's collection</p>
                            <p>3,333 Unique NFT's</p>
                            <p>33 Legendary</p>
                            <p>333+ Unique Attributes</p>
                          </div>                        
                        </div>
                      </FadeInContainer>                      
                    </div>
                      <div className='section-3-img'>
                        <FadeInContainer animation="fade-right">
                          <div style={{marginBottom: 36}}>
                            <img style={{transform: 'scale(2)'}} src={NFT16} width="368px"></img>
                          </div>
                        </FadeInContainer>                        
                      </div>                                    
                  </div>
                </div>
                </div>
              
                
                
              
                <div className='spacing-medium-bot roadmap-background'>
                    <div>
                      <Roadmap />
                    </div>
                  </div>
              
                
              
              <div id="founders-background" className='founders-background'>
                  <div className='spacing-medium'>
                    <div id="founders" className='primary-section'>
                        <Founders />
                    </div>
                  </div>
                </div>
              
                
                
              
                <FAQs />     
              
     
              <Footer />
              <a id="twitter-link" href='https://twitter.com/fantazyanft' hidden target="_blank"></a>
              <a id="insta-link" href='https://instagram.com/fantazyanft' hidden target="_blank"></a>
              <a id="discord-link" href='#' hidden target="_blank"></a>
            </div>            
          </div>          
        </MainApp>
    </div>
  );
}

export default App;
