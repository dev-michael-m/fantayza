import React, {useState} from 'react';
import '../stylesheet/NavBar.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Logo from '../assets/FNFT_Website_NoxIcon.png';
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
        console.log({id})
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

        console.log(_offset);
        
        setTimeout(() => {
            window.scrollTo({top: pos.top + _offset, behavior: 'smooth'})
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