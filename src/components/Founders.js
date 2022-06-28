import React from 'react';
import Ahmed from '../assets/FNFT_Artist_Resized.jpg';
import Michael from '../assets/michael.png';
import Ricardo from '../assets/ricardo.jpg';
import Ruba from '../assets/ruba.jpg';
import Yousef from '../assets/yousef.jpg';
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
        <div className='secondary-background page3-wrapper' style={{fontSize: '1rem'}}>
            <div className='flex-just-even flex-align-start flex-wrap'>
                <div style={{padding: 25}} className='founder-card flex-align-all flex-column'>
                    <div>
                        {/* <img src={ImgPlaceholder} width='200px'></img> */}
                        <Avatar className="profile-avatar box-shadow" src={Ahmed} />
                    </div>
                    <div className='flex-align-all flex-column'>
                        <p><b>Ahmed</b></p>
                        <p><b>Artist</b></p>
                        <p style={{fontWeight: 'bold'}} className="text-center">Visual creator, designer &amp; storyteller of the Fantazya collection</p>
                    </div>
                    <div className='flex-align-center'>
                        <IconButton id="f1-social" onClick={onClickSocial}>
                            <InstagramIcon id="f1-social" className='' />
                        </IconButton>
                    </div>
                </div>
                
                <div style={{padding: 25}} className='founder-card flex-align-all flex-column'>
                    <div>
                        {/* <img src={ImgPlaceholder} width='200px'></img> */}
                        <Avatar className="profile-avatar box-shadow" src={Ruba} />
                    </div>
                    <div className='flex-align-all flex-column'>
                        <p><b>Ruba</b></p>
                        <p><b>Founder</b></p>
                        <p style={{fontWeight: 'bold'}} className="text-center ">Architect &amp; Creator of design publications, with a fascination of the art world advocating women's potential &amp; strength</p>
                    </div>
                    <div className='flex-align-center'>
                        <IconButton id="f2-social" onClick={onClickSocial}>
                            <InstagramIcon id="f2-social" className='' />
                        </IconButton>
                    </div>
                </div>
                
                
                <div style={{padding: 25}} className='founder-card flex-align-all flex-column'>
                    <div>
                        {/* <img src={ImgPlaceholder} width='200px'></img> */}
                        <Avatar className="profile-avatar box-shadow" src={Yousef} />
                    </div>
                    <div className='flex-align-all flex-column'>
                        <p><b>Yousef</b></p>
                        <p><b>COO</b></p>
                        <p style={{fontWeight: 'bold'}} className="text-center ">Mastermind of the growth of Fantazya's world. Trader, blockchain &amp; tokenomics enthusiast</p>
                    </div>
                    <div className='flex-align-center'>
                        {/* <IconButton id="f3-social" onClick={onClickSocial}>
                            <InstagramIcon id="f3-social" className='' />
                        </IconButton> */}
                    </div>
                </div>
                
                
                <div style={{padding: 25}} className='founder-card flex-align-all flex-column'>
                    <div>
                        {/* <img src={f1Img} width='200px'></img> */}
                        <Avatar className="profile-avatar box-shadow" src={Michael} />
                    </div>
                    <div className='flex-align-all flex-column'>
                        <p><b>Michael</b></p>
                        <p><b>Developer</b></p>
                        <p style={{fontWeight: 'bold'}} className="text-center ">Blockchain &amp; Web3 developer. Experienced in smart contracts and complex system integration</p>
                    </div>
                    <div className='flex-align-center'>
                        <IconButton id="f4-social" onClick={onClickSocial}>
                            <TwitterIcon id="f4-social" className='' />
                        </IconButton>
                    </div>
                </div>
                
                
                <div style={{padding: 25}} className='founder-card flex-align-all flex-column'>
                    <div>
                        {/* <img src={ImgPlaceholder} width='200px'></img> */}
                        <Avatar className="profile-avatar box-shadow" src={Ricardo} />
                    </div>
                    <div className='flex-align-all flex-column'>
                        <p><b>Ricardo</b></p>
                        <p><b>Animator &amp; Game Design</b></p>
                        <p style={{fontWeight: 'bold'}} className="text-center ">Creative Multimedia Director with passion in the virtual work of Web3.  Graduate of Game design from the Raffles design institute in Singapore</p>
                    </div>
                    <div className='flex-align-center'>
                        <IconButton id="f5-social" onClick={onClickSocial}>
                            <LinkedInIcon id="f5-social" className='' />
                        </IconButton>
                    </div>
                </div>
                
            </div>
            
            <a id="ahmed-social" href='https://www.instagram.com/ahmed_id/' target="_blank" hidden></a>
            <a id="yousef-social" href='https://www.instagram.com/alfa.yousef/' target="_blank" hidden></a>
            <a id="ruba-social" href='https://www.instagram.com/rqas/' target="_blank" hidden></a>
            <a id="michael-social" href='https://www.twitter.com/_syndk8/' target="_blank" hidden></a>
            <a id="ricardo-social" href='https://www.linkedin.com/in/ricardo-alberto-de-la-roche-ortega-116a51178' target="_blank" hidden></a>
        </div>
    )
}

export default Founders;