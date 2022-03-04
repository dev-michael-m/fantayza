import React from 'react';
import '../stylesheet/Footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import DiscordIcon from '../assets/discord.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';

const Footer = () => {
    return (
        <div className="footer-container">
            <div style={{paddingTop: 14}}>
                <label >Fantayza</label>
                <div style={{marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <TwitterIcon style={{margin: '0px 10px'}} onClick={() => document.getElementById('twitter-link-hero').click()} />
                    <InstagramIcon style={{margin: '0px 10px'}} onClick={() => document.getElementById('instagram-link-hero').click()} />
                    <img style={{margin: '0px 10px'}} src={DiscordIcon} width="26px" onClick={() => document.getElementById('discord-link-hero').click()}></img>
                </div>
            </div>
            <div className="footer-copyright">
                <label>&copy; {new Date().getFullYear()} Fantayza. All Rights Reserved.</label>
            </div>
            <div style={{fontSize: 10, color: 'rgba(255,255,255,0.52)'}}>
                <label>Powered by <u>Apexeth.io</u></label>
            </div>
        </div>
    )
}

export default Footer;