import React from 'react';
import Profile1 from '../assets/FNFT_Profile_Ahmed_Resized.jpg';
import Profile2 from '../assets/FNFT_Profile_Michael_Resized.jpg';
import Profile3 from '../assets/FNFT_Profile_Ricardo_Resized.jpg';
import Profile4 from '../assets/FNFT_Profile_Ruba_Resized.jpg';
import Profile5 from '../assets/FNFT_Profile_Yousef_Resized.jpg';
import Avatar from '@mui/material/Avatar';
import loadable from '@loadable/component';

const FadeInContainer = loadable(() => import('./FadeInContainer'));

const Founders = () => {
    
    return (
        <div className='flex-just-even flex-align-start flex-wrap'>
            <FadeInContainer animation="fade-in">
                <div style={{width: 245, padding: 25}} className='flex-align-all flex-column'>
                    <div>
                        {/* <img src={ImgPlaceholder} width='200px'></img> */}
                        <Avatar className="profile-avatar box-shadow" src={Profile1} />
                    </div>
                    <div className='flex-align-all flex-column'>
                        <p className="primary-text"><b>Ahmed</b></p>
                        <p className="primary-text"><b>Artist</b></p>
                        <p style={{fontWeight: 'bold'}} className="text-center primary-text">Visual creator, designer &amp; storyteller of the Fantazya collection</p>
                    </div>
                </div>
            </FadeInContainer>
            <FadeInContainer animation="fade-in">
            <div style={{width: 245, padding: 25}} className='flex-align-all flex-column'>
                <div>
                    {/* <img src={ImgPlaceholder} width='200px'></img> */}
                    <Avatar className="profile-avatar box-shadow" src={Profile4} />
                </div>
                <div className='flex-align-all flex-column'>
                    <p className="primary-text"><b>Ruba</b></p>
                    <p className="primary-text"><b>Founder</b></p>
                    <p style={{fontWeight: 'bold'}} className="text-center primary-text">Architect &amp; Creator of design publications, with a fascination of the art world advocating women's potential &amp; strength</p>
                </div>
            </div>
            </FadeInContainer>
            <FadeInContainer animation="fade-in">
            <div style={{width: 245, padding: 25}} className='flex-align-all flex-column'>
                <div>
                    {/* <img src={ImgPlaceholder} width='200px'></img> */}
                    <Avatar className="profile-avatar box-shadow" src={Profile5} />
                </div>
                <div className='flex-align-all flex-column'>
                    <p className="primary-text"><b>Yousef</b></p>
                    <p className="primary-text"><b>COO</b></p>
                    <p style={{fontWeight: 'bold'}} className="text-center primary-text">Mastermind of the growth of Fantazya's world. Trader, blockchain &amp; tokenomics enthusiast</p>
                </div>
            </div>
            </FadeInContainer>
            <FadeInContainer animation="fade-in">
            <div style={{width: 245, padding: 25}} className='flex-align-all flex-column'>
                <div>
                    {/* <img src={f1Img} width='200px'></img> */}
                    <Avatar className="profile-avatar box-shadow" src={Profile2} />
                </div>
                <div className='flex-align-all flex-column'>
                    <p className="primary-text"><b>Michael</b></p>
                    <p className="primary-text"><b>Developer</b></p>
                    <p style={{fontWeight: 'bold'}} className="text-center primary-text">Blockchain &amp; Web3 developer. Experienced in smart contracts and complex system integration</p>
                </div>
            </div>
            </FadeInContainer>
            <FadeInContainer animation="fade-in">
            <div style={{width: 245, padding: 25}} className='flex-align-all flex-column'>
                <div>
                    {/* <img src={ImgPlaceholder} width='200px'></img> */}
                    <Avatar className="profile-avatar box-shadow" src={Profile3} />
                </div>
                <div className='flex-align-all flex-column'>
                    <p className="primary-text"><b>Ricardo</b></p>
                    <p className="primary-text"><b>Animator &amp; Game Design</b></p>
                    <p style={{fontWeight: 'bold'}} className="text-center primary-text">Creative Multimedia Director with passion in the virtual work of Web3.  Graduate of Game design from the Raffles design institute in Singapore</p>
                </div>
            </div>
            </FadeInContainer>
            
        </div>
    )
}

export default Founders;