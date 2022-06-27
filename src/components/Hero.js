import React from 'react'
import '../stylesheet/Hero.css';
import FadeInContainer from './FadeInContainer';
import layer1 from '../assets/FNFT_Website_Page02_City.png';
import layer2 from '../assets/FNFT_Website_Page02_Fantazya.png';
import layer3 from '../assets/FNFT_Website_Page02_Text.png';
import logo from '../assets/FNFT_Website_Page01_Logo.png';

const Hero = ({soldOut,wallet,onAlert,onConnectWallet,saleActive,pubSale}) => {

    // const mintMinus = () => {
    //     if(tokens > 1){
    //         setTokens(prevState => prevState - 1);
    //     }        
    // }

    // const mintAdd = () => {
    //     if(tokens < 10){
    //         setTokens(prevState => prevState + 1);
    //     }
    // }

    return (
      <div className="hero-container">
        <div
          id="welcome-section"
          className="section-large"
        >
        <div className='parallax'>
            <div>
              <img style={{paddingBottom: '50rem'}} src={logo} width="100%"></img>
            </div>
            <div className="parallax-group">
              <div className="parallax-layer layer-back">
                <div className='layer'>
                  <img src={layer1}></img>
                </div>                
              </div>
              <div className="parallax-layer layer-middle">
                <div className='layer'>
                  <img src={layer2}></img>
                </div>                
              </div>
              <div className="parallax-layer layer-front">
                <div className='layer'>
                  <img src={layer3}></img>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hero
