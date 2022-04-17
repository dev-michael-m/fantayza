import React from 'react'
import '../stylesheet/Hero.css';
import FadeInContainer from './FadeInContainer';

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
        <div id="inner-hero" className='inner-hero'>
        <FadeInContainer animation="fade-in">
          <div className='inner-padding'>
            <div style={{ margin: 30 }}>
              
            </div>
          </div>
        </FadeInContainer>
        </div>
        
        
        <div id="welcome-section" className="section-large primary-section spacing-medium welcome-section">
          <FadeInContainer animation="fade-left">
            <div className='hero-section-doc'>
              <p>
                It hurts.  The skin tearing off my face, my bones exposed.  I feel the pain everywhere.
              </p>
            <p> 
              Indigo colored smoke overcomes the city, my clothes are ragged, and my feet sore.  I walk past a <b>tearful woman</b> - a son carried on one hip, a daughter
              nagging at her feet, as she struggles to make ends meet.  I feel her pain - in my bones, on my skin, her pain is my pain. 
            </p>
            <p>
              It has been two years since <b>General Sly Stark</b> overthrew the Council of Givers in Kiruna, and turned it to ruins.  Struck by the Cosmic Lights from that fateful night, I was left with a rare gift -
              I feel the pain of the women around me passed on from generations, I feel it in my bones as i am stripped of my skin, and my bones are exposed.
            </p>
            <p>
              I need to heal this overwhelming pain, and stop it from being passed on to the generations to come.  They say healing is found in the <b>AZYA</b> rays.
            </p>
            </div>
          </FadeInContainer>
        </div>
      </div>
    );
}

export default Hero
