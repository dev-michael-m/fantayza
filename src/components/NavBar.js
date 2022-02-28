import React from 'react';
import '../stylesheet/NavBar.css';
import Button from '@mui/material/Button';
import VerifiedIcon from '@mui/icons-material/Verified';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import DiscordIcon from '../assets/discord.png';
import IconButton from '@mui/material/IconButton';


const NavBar = () => {

    return (
        <div id="nav-container" className="nav-container">
            <div id="inner-nav" className="inner-nav flex-just-between">
                <div>
                    <IconButton>
                        <MenuIcon style={{color: 'rgb(255,255,255)'}} />
                    </IconButton>                    
                </div>
                <div style={{display: 'flex'}}>
                    <div className="socials">
                        <IconButton>
                            <TwitterIcon style={{color: 'rgb(255,255,255)'}} />
                        </IconButton>
                        <IconButton>
                            <InstagramIcon style={{color: 'rgb(255,255,255)'}} />
                        </IconButton>
                        <IconButton>
                            <img src={DiscordIcon} width="26px"></img>
                        </IconButton>
                    </div>                    
                </div>
                
            </div>
        </div>
    )
}

export default NavBar;