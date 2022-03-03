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
                <div className='flex-align-center'>
                    <div style={{marginRight: 28}} className="socials">
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
                    <div>
                        <Button style={{height: 36}} className='custom-button secondary small' variant='contained'>connect wallet</Button>
                    </div>                  
                </div>
                
            </div>
        </div>
    )
}

export default NavBar;