import React from 'react';
import ImgPlaceholder from '../assets/image-placeholder.jpg';

const Founders = () => {
    
    return (
        <div className='flex-just-even flex-align-start flex-wrap'>
            <div style={{width: 245, padding: 25}} className='flex-align-all flex-column'>
                <div>
                    <img src={ImgPlaceholder} width='200px'></img>
                </div>
                <div className='flex-align-all flex-column'>
                    <p>Ahmed</p>
                    <p>Artist</p>
                    <p className="text-center">Visual creator, designer &amp; storyteller of the Fantayza collection</p>
                </div>
            </div>
            <div style={{width: 245, padding: 25}} className='flex-align-all flex-column'>
                <div>
                    <img src={ImgPlaceholder} width='200px'></img>
                </div>
                <div className='flex-align-all flex-column'>
                    <p>Ruba</p>
                    <p>Founder</p>
                    <p className="text-center">Architect &amp; Creator of design publications, with a fascination of the art world advocating women's potential &amp; strength</p>
                </div>
            </div>
            <div style={{width: 245, padding: 25}} className='flex-align-all flex-column'>
                <div>
                    <img src={ImgPlaceholder} width='200px'></img>
                </div>
                <div className='flex-align-all flex-column'>
                    <p>Yousef</p>
                    <p>COO</p>
                    <p className="text-center">Mastermind of the growth of Fantayza's world. Trader, blockchain &amp; tokenomics enthusiast</p>
                </div>
            </div>
            <div style={{width: 245, padding: 25}} className='flex-align-all flex-column'>
                <div>
                    <img src={ImgPlaceholder} width='200px'></img>
                </div>
                <div className='flex-align-all flex-column'>
                    <p>Michael</p>
                    <p>Developer</p>
                    <p className="text-center">Blockchain &amp; Web3 developer. Experienced in smart contracts and complex system integration</p>
                </div>
            </div>
            <div style={{width: 245, padding: 25}} className='flex-align-all flex-column'>
                <div>
                    <img src={ImgPlaceholder} width='200px'></img>
                </div>
                <div className='flex-align-all flex-column'>
                    <p>Ricardo</p>
                    <p>Animator</p>
                    <p className="text-center">Blockchain &amp; Web3 developer. Experienced in smart contracts and complex system integration</p>
                </div>
            </div>
        </div>
    )
}

export default Founders;