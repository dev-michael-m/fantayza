import React, {useState} from 'react';
import '../stylesheet/NavBar.css';
import Button from '@mui/material/Button';
import VerifiedIcon from '@mui/icons-material/Verified';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Logo from '../assets/FNFT_Website_NoxIcon.png';
import DiscordIcon from '../assets/discord.png';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import $ from 'jquery';

const NavBar = ({onConnectWallet, wallet}) => {
    const [menu,setMenu] = useState(false);
    
    const toggleDrawer = () => {
        setMenu(prevState => !prevState);
    }

    const handleLinkClick = (event,_nav) => {
        const id = event.target.id;
        let pos = null;

        switch(id){
            case 'artist':
                pos = $('#artist').position();
                break;
            case 'special':
                pos = $('#special').position();
                break;
            case 'faqs':
                pos = $('#faqs').position();
                break;
            case 'team':
                pos = $('#team').position();                    
                break;
        }

        console.log(pos.top);

        setTimeout(() => {
            window.scrollTo({top: pos.top, behavior: 'smooth'})
            if(!_nav){
                toggleDrawer();   
            }            
        },100);       
             
    }

    return (
        <div id="nav-container" className="nav-container">
            <div id="inner-nav" className="inner-nav flex-just-between">
                <div>
                    <IconButton onClick={toggleDrawer}>
                        <img src={Logo} width={50}></img>
                    </IconButton> 
                    <Drawer
                        anchor='left'
                        open={menu}
                        onClose={toggleDrawer}
                    >
                        <div className="menu-container" id="menu-container">
                            <div className="menu-close">
                                <IconButton onClick={toggleDrawer}>
                                    <CloseIcon style={{color: 'rgb(255,255,255)'}} />
                                </IconButton>
                            </div>
                            <div className="menu-list">
                                <a className='drawer-link' id="artist" href="#" onClick={handleLinkClick}>Artist</a>                             
                                <a className='drawer-link' id="special" href="#" onClick={handleLinkClick}>What's Special?</a>                             
                                <a className='drawer-link' id="team" href="#" onClick={handleLinkClick}>Team</a>                             
                                <a className='drawer-link' id="faqs" href="#" onClick={handleLinkClick}>FAQ</a>
                            </div>                            
                        </div>                        
                    </Drawer>                   
                </div>
                <div className='top-menu'>
                    <a className='drawer-link' id="artist" href="#" onClick={(e) => handleLinkClick(e,true)}>Artist</a>
                    <a className='drawer-link' id="special" href="#" onClick={(e) => handleLinkClick(e,true)}>What's Special?</a>
                    <a className='drawer-link' id="team" href="#" onClick={(e) => handleLinkClick(e,true)}>Team</a>
                    <a className='drawer-link' id="faqs" onClick={(e) => handleLinkClick(e,true)} href="#">FAQ</a>
                </div>
                <div className='flex-align-center'>
                    <div style={{marginRight: 28}} className="socials">
                        <IconButton onClick={() => document.getElementById('twitter-link').click()}>
                            <TwitterIcon style={{color: '#20d5d5'}} />
                        </IconButton>
                        <IconButton onClick={() => document.getElementById('insta-link').click()}>
                            <InstagramIcon style={{color: '#20d5d5'}} />
                        </IconButton>
                    </div>  
                    {/* <div>
                        { !wallet.address ?
                            <Button style={{height: 36}} className='custom-button small' variant='outlined' onClick={onConnectWallet}>connect wallet</Button> :
                            <div style={{color: 'white'}} className='flex-align-center'>
                                <VerifiedIcon style={{fontSize: 18, marginRight: 10}} />
                                <p>{wallet.address}</p>
                            </div>
                        }
                    </div>                   */}
                </div>
                
            </div>
        </div>
    )
}

export default NavBar;