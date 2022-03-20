import React from 'react';
import Profile1 from '../assets/FNFT_Profile_Ahmed_Resized.jpg';
import Profile2 from '../assets/FNFT_Profile_Michael_Resized.jpg';
import Profile3 from '../assets/FNFT_Profile_Ricardo_Resized.jpg';
import Profile4 from '../assets/FNFT_Profile_Ruba_Resized.jpg';
import Profile5 from '../assets/FNFT_Profile_Yousef_Resized.jpg';
import Avatar from '@mui/material/Avatar';
import FadeInContainer from './FadeInContainer';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';

const Founders = () => {

    const onClickSocial = (event) => {
        const id = event.target.id;

        switch(id){
            case 'f1-social': document.getElementById('ahmed-social').click();
                break;
            case 'f2-social': document.getElementById('ruba-social').click();
                break;
            case 'f3-social': document.getElementById('yousef-social').click();
                break;
            case 'f4-social': document.getElementById('michael-social').click();
                break;
            case 'f5-social': document.getElementById('ricardo-social').click();
                break;
        }
    }
    
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
                    <div className='flex-align-center'>
                        <IconButton id="f1-social" onClick={onClickSocial}>
                            <InstagramIcon id="f1-social" className='secondary-text' />
                        </IconButton>
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
                <div className='flex-align-center'>
                    <IconButton id="f2-social" onClick={onClickSocial}>
                        <InstagramIcon id="f2-social" className='secondary-text' />
                    </IconButton>
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
                <div className='flex-align-center'>
                    <IconButton id="f3-social" onClick={onClickSocial}>
                        <InstagramIcon id="f3-social" className='secondary-text' />
                    </IconButton>
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
                <div className='flex-align-center'>
                    <IconButton id="f4-social" onClick={onClickSocial}>
                        <TwitterIcon id="f4-social" className='secondary-text' />
                    </IconButton>
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
                <div className='flex-align-center'>
                    <IconButton id="f5-social" onClick={onClickSocial}>
                        <LinkedInIcon id="f5-social" className='secondary-text' />
                    </IconButton>
                </div>
            </div>
            </FadeInContainer>
            <a id="ahmed-social" href='https://www.instagram.com/ahmed_id/' target="_blank" hidden></a>
            <a id="yousef-social" href='https://www.instagram.com/alfa.yousef/' target="_blank" hidden></a>
            <a id="ruba-social" href='https://www.instagram.com/rqas/' target="_blank" hidden></a>
            <a id="michael-social" href='https://www.twitter.com/_syndk8/' target="_blank" hidden></a>
            <a id="ricardo-social" href='https://www.linkedin.com/in/ricardo-alberto-de-la-roche-ortega-116a51178' target="_blank" hidden></a>
        </div>
    )
}

export default Founders;