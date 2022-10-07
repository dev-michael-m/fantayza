import React, {useState} from 'react';
import '../stylesheet/NavBar.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Logo from '../assets/FNFT_Website_NoxIcon.png';
import DiscordIcon from '../assets/discord-blue.png';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import OSIcon from '../assets/opensea.png';
import CloseIcon from '@mui/icons-material/Close';
import $ from 'jquery';
import { useLocation } from 'react-router-dom';

const NavBar = ({onConnectWallet, wallet}) => {
    const [menu,setMenu] = useState(false);
    const location = useLocation();
    
    const toggleDrawer = () => {
        setMenu(prevState => !prevState);
    }

    const handleLinkClick = (event,_nav) => {
        const id = event.target.id;

        let pos = null;
        let _offset = document.getElementById('welcome-section').offsetHeight;
        const _offsetM = document.getElementById('mission').offsetHeight;
        const _offsetS = $('#special').height();
        const _offsetR = document.getElementById('roadmap').offsetHeight;
        const _offsetA = document.getElementById('artist').offsetHeight;
        const _offsetT = document.getElementById('team').offsetHeight;

        //console.log(_offset,_offsetM,_offsetR,_offsetS,_offsetA,_offsetT);

        switch(id){
            case 'artist':
                pos = $('#artist').position();
                _offset = _offset * 5;
                break;
            case 'special':
                pos = $('#special').position();
                _offset = _offset * 2.5;
                break;
            case 'faqs':
                pos = $('#faqs').position();
                _offset = _offset * 10;
                break;
            case 'team':
                pos = $('#team').position(); 
                _offset = _offset * 8;                  
                break;
            case 'mission':
                pos = $('#mission').position();       
                break;
            case 'roadmap':
                pos = $('#roadmap').position();     
                _offset = _offset * 4;              
                break;
        }

        setTimeout(() => {
            window.scrollTo({top: pos.top + _offset, behavior: 'smooth'})
            if(!_nav){
                toggleDrawer();   
            }            
        },100);       
             
    }

    return (
        <div id="nav-container" className="nav-container">
            {!location.pathname.includes('mint') ? <div id="inner-nav" className="inner-nav flex-just-between">
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
                                <a className='drawer-link' id="mission" href="#" onClick={handleLinkClick}>Our Mission</a>                             
                                <a className='drawer-link' id="special" href="#" onClick={handleLinkClick}>Utility</a>                             
                                <a className='drawer-link' id="roadmap" href="#" onClick={handleLinkClick}>Roadmap</a>                             
                                <a className='drawer-link' id="artist" href="#" onClick={handleLinkClick}>Artist</a>                             
                                <a className='drawer-link' id="team" href="#" onClick={handleLinkClick}>Team</a>                             
                                <a className='drawer-link' id="faqs" href="#" onClick={handleLinkClick}>FAQ</a>
                            </div>                            
                        </div>                        
                    </Drawer>                   
                </div>
                <div className='top-menu'>
                    <a className='drawer-link' id="mission" href="#" onClick={(e) => handleLinkClick(e,true)}>Our Mission</a>
                    <a className='drawer-link' id="special" href="#" onClick={(e) => handleLinkClick(e,true)}>Utility</a>
                    <a className='drawer-link' id="roadmap" href="#" onClick={(e) => handleLinkClick(e,true)}>Roadmap</a>
                    <a className='drawer-link' id="artist" href="#" onClick={(e) => handleLinkClick(e,true)}>Artist</a>
                    <a className='drawer-link' id="team" href="#" onClick={(e) => handleLinkClick(e,true)}>Team</a>
                    <a className='drawer-link' id="faqs" onClick={(e) => handleLinkClick(e,true)} href="#">FAQ</a>
                </div>
                <div className='flex-align-center'>
                    <div style={{marginRight: 28}} className="socials">
                        <IconButton onClick={() => document.getElementById('opensea-link').click()}>
                            <img src={OSIcon} width="26"></img>
                        </IconButton>
                        <IconButton onClick={() => document.getElementById('insta-link').click()}>
                            <InstagramIcon style={{color: '#20d5d5'}} />
                        </IconButton>
                        <IconButton>
                            <img src={DiscordIcon} width="26"></img>
                        </IconButton>
                    </div>
                </div>                
            </div> : null}
        </div>
    )
}

export default NavBar;