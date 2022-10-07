import './App.css';
import './stylesheet/Sections.css';
import { useEffect } from 'react';
import ArtistVidMP4 from './assets/FNFT_ArtistVideo.mp4';
import FAQs from './components/FAQs';
import Roadmap from './components/Roadmap';
import Founders from './components/Founders';
import Footer from './pages/Footer';
import Hero from './components/Hero';
import FantazyaStreet from './assets/FNFT_Street_01.jpg';
import NFT1 from './assets/FNFT_NFT_New_1.jpg';
import NFT2 from './assets/FNFT_NFT_New_2.jpg';
import NFT3 from './assets/FNFT_NFT_New_3.jpg';
import NFT4 from './assets/shocking.jpg';
import IconButton from '@mui/material/IconButton';
import OSIcon from './assets/opensea.png';

function App() {
  return (
    <div className="App">
          <div className="main-bg-img parallax-container">
            <div className="inner-main">
              <Hero />  
              <div id="mission" className='page2'>
                <div className='page2-wrapper' id="page2-wrapper" style={{padding: 40}}>
                  <div style={{paddingBottom: 66}}>
                    <IconButton>
                      <img src={OSIcon} width="40"></img>
                    </IconButton>
                    <h2 style={{color: 'white'}}>Get Yours on OpenSea!</h2>
                  </div>
                  <div className='flex-box-dyn' style={{position: 'relative', height: '100%',paddingBottom: '12%'}}>
                    <div className='dynamic-padding-sml prime-img'>
                      <img style={{borderRadius: 18}} src={NFT4} width="100%"></img>
                    </div>
                    <div className='page5-inv'>
                      <div className='inv-inner'>
                        <h1 style={{margin: 0}}>Our Mission</h1>
                        <p><b>Fantazya was built on the premise that we can really capitalise on the NFT space in sending a positive message. The communities built around Web3 are amazing, and their potential is limitless. Why not use all this potential to somehow create a positive impact? Enter Fantazya.</b></p>
                        <p><b>Fantazya's main purpose is to spread awareness and to educate the younger generation of females including (but not limited to) developing countries about their own rights, potential, and violence against women.</b></p>
                      </div>
                    </div>
                  </div>                  
                  <div>
                    <h2 style={{color: 'white'}}>Get Yours on OpenSea!</h2>
                    <IconButton>
                      <img src={OSIcon} width="40"></img>
                    </IconButton>
                  </div>                                                            
                </div>                                
              </div>   
                    
              <div id="special" className='page4'>
                <div className='page4-wrapper'>
                  <div className='flex-align-center dynamic-padding-sml' style={{width: '100%', position: 'relative'}}>
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
                      <h1>Utility</h1>
                      <h3 style={{textDecoration: 'underline'}}>Art Collectors</h3>
                      <p><b>Hand drawn art by renowned artist and exclusive merchandise.</b></p>
                      <h3 style={{textDecoration: 'underline'}}>Long Term Investors</h3>
                      <p><b>Passive income through staking, liquidity pool, and 100% of the royalties from the animation series ticket sales will go directly back to the holders.</b></p>
                      <h3 style={{textDecoration: 'underline'}}>Philanthropists</h3>
                      <p><b>Charity from sales revenue and distribution of Life of Fantazya's animation series to audiences with no accessible knowledge on womens rights.</b></p>
                    </div>                    
                  </div>
                </div>
              </div>
              <div>
                <Roadmap />
              </div> 
              <div id="artist" className='page2'>
                <div className='page2-wrapper' id="page2-wrapper" style={{padding: 40}}>
                  <div className='flex-box-dyn' style={{position: 'relative', height: '100%', paddingBottom: '12%'}}>
                    <div style={{width: '100%',position: 'relative', top: 40}}>
                      <img style={{borderRadius: 18, transform: 'scale(1.2)'}} src={FantazyaStreet} width="100%"></img>
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
                <video className="video" id="video" autoPlay muted loop controls width="75%">
                  <source src={ArtistVidMP4}></source>
                </video>                 
              </div>
              <div id="team">
                <Founders />
              </div>
              <div id="faqs" className='bottom-background'>
                <div>
                  <FAQs />
                </div>                
              </div>              
              <Footer />
              <a id="opensea-link" href='https://opensea.io/collection/fantazya-the-revival' hidden target="_blank"></a>
              <a id="insta-link" href='https://instagram.com/fantazyanft' hidden target="_blank"></a>
              <a id="discord-link" href='https://discord.gg/fantazya' hidden target="_blank"></a>
            </div>            
          </div>
    </div>
  );
}

export default App;
