import React from 'react';
import '../stylesheet/Footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import DiscordIcon from '../assets/discord.png';

const Footer = () => {
    return (
        <div className="footer-container">
            <div style={{paddingTop: 14}}>
                <label >Fantazya</label>
                <div style={{marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <TwitterIcon style={{margin: '0px 10px'}} onClick={() => document.getElementById('twitter-link').click()} />
                    <InstagramIcon style={{margin: '0px 10px'}} onClick={() => document.getElementById('insta-link').click()} />
                    <img style={{margin: '0px 10px'}} src={DiscordIcon} width="26px" onClick={() => document.getElementById('discord-link').click()}></img>
                </div>
            </div>
            <div className="footer-copyright">
                <label>&copy; {new Date().getFullYear()} Fantazya. All Rights Reserved.</label>
            </div>
            <div style={{fontSize: 10, color: 'rgba(255,255,255)'}}>
                <label>Powered by <u>Lythium.io</u></label>
            </div>
        </div>
    )
}

export default Footer;