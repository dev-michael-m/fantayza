import './App.css';
import './stylesheet/Sections.css';
import { useEffect } from 'react';
import ArtistVidMP4 from './assets/FNFT_ArtistVideo.mp4';
import NFT16 from './assets/16_Resized.png';
import ArtistImg from './assets/FNFT_Artist_Resized.jpg';
import BodyImg from './assets/FNFT_Character_Body2.png';
import FadeInContainer from './components/FadeInContainer';
import FAQs from './components/FAQs';
import Roadmap from './components/Roadmap';
import Founders from './components/Founders';
import Footer from './pages/Footer';
import Hero from './components/Hero';
import FantazyaStreet from './assets/FNFT_Street_01.jpg';
import NFT1 from './assets/FNFT_NFT_New_1.jpg';
import NFT2 from './assets/FNFT_NFT_New_2.jpg';
import NFT3 from './assets/FNFT_NFT_New_3.jpg';

function App() {

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
      }
        

      return () => {
        mounted = false;
      };
    }, []);  

  return (
    <div className="App">
          <div className="main-bg-img parallax-container">
            <div className="inner-main">
              <Hero />   
              <div id="artist" className='page2'>
                <div className='page2-wrapper' id="page2-wrapper" style={{padding: 40}}>
                  <div className='flex-box' style={{position: 'relative', height: '100%'}}>
                    <div className='dynamic-padding-lrg' style={{width: '75%'}}>
                      <img style={{borderRadius: 18}} src={FantazyaStreet} width="100%"></img>
                    </div>
                    <div className='page2-inv'>
                      <div className='inv-inner'>
                        <h1 style={{margin: 0}}>About the Artist</h1>
                        <p><b>Ahmed Safer, born in Kuwait, is a prominent visual artist and designer.  As Ahmed describes his art as a "worlds of imagination" he was always fascinated by the way "art engages the observer.  The way art can tell a story, and the observer reacts to that story.  How art would create an alternate dimension for the artist and observer alike."</b></p>
                        <p><b>Having graduated from university in 3D Animation and VFX (Streamin in Modeling) - Vancouver Film School, Ahmed has also participated in various galleries worldwide.</b></p>
                      </div>
                    </div>                    
                  </div>                  
                </div>                                
              </div>
              <div className='page2' style={{paddingBottom: 100}}>
                <video autoPlay loop controls width="75%">
                  <source src={ArtistVidMP4}></source>
                </video>                 
              </div>
              <div id="special" className='page4'>
                <div className='page4-wrapper'>
                  <div className='flex-align-center dynamic-padding-sml' style={{width: '75%', position: 'relative'}}>
                    <div style={{position: 'relative'}}>
                      <div>
                        <img className='radius10 shadow-sml' src={NFT1} width="100%"></img>
                      </div>
                      <div style={{position: 'relative', left: 50, bottom: 50, zIndex: 2}}>
                        <img className='radius10 shadow-sml' src={NFT2} width="100%"></img>
                      </div>
                    </div>
                    <div style={{position: 'relative', right: 70, bottom: 70, zIndex: 3}}>
                      <img className='radius10 shadow-sml' src={NFT3} width="100%"></img>
                    </div>
                  </div>
                  <div className='page4-inv'>
                    <div className='inv-inner'>
                      <h1>What's Special?</h1>
                      <h3 style={{textDecoration: 'underline'}}>Transparency</h3>
                      <p><b>All owners are fully doxxed to ensure complete transparency and honesty.</b></p>
                      <h3 style={{textDecoration: 'underline'}}>Community</h3>
                      <p><b>Without a strong community, the project would not be successful.  Community is the key element, where our community will grow with collaborations with other artists and NFT projects.</b></p>
                      <h3 style={{textDecoration: 'underline'}}>Holders Power</h3>
                      <p><b>Holders will have full control of the project.  Holders will get voting power over suggesting ideas about the projects future endeavors.</b></p>
                    </div>                    
                  </div>
                </div>
              </div>
              <div id="team">
                <Founders />
              </div>
              <div id="faqs" className='bottom-background'>
                <div>
                  <FAQs />
                </div>                
              </div>              
                      
              {/* <div id="artist-bio" className='artist-bio'>
                <div className='spacing-medium'>
                    <div className='primary-section'>
                      
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
              </div> */}
              
              {/* <div id="project-background" className='project-background'>
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
              
              {/* <div className='spacing-medium-bot roadmap-background'>
                <div>
                  <Roadmap />
                </div>
              </div> */}
              
              {/* <div id="founders-background" className='founders-background'>
                <div className='spacing-medium'>
                  <div id="founders" className='primary-section'>
                      <Founders />
                  </div>
                </div>
              </div> */}  
              
              <Footer />
              <a id="twitter-link" href='https://twitter.com/fantazyanft' hidden target="_blank"></a>
              <a id="insta-link" href='https://instagram.com/fantazyanft' hidden target="_blank"></a>
              <a id="discord-link" href='https://discord.gg/qUG8fXceDt' hidden target="_blank"></a>
            </div>            
          </div>
    </div>
  );
}

export default App;
