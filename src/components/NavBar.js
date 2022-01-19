import React,{useState} from 'react';
import '../stylesheet/NavBar.css';
import Button from '@mui/material/Button';
import VerifiedIcon from '@mui/icons-material/Verified';


const NavBar = ({wallet,onAlert,onConnectWallet}) => {

    const [walletActive,setWalletActive] = useState(true);

    return (
        <div id="nav-container" className="nav-container">
            <div id="inner-nav" className="inner-nav">
                <div style={{marginLeft: 12, marginRight: 'auto', textAlign: 'left', display: 'flex'}}>
                    {/* <h3 className="nav-header">Larva Lords</h3> */}
                    {/* <img className='nav-logo' src={Logo} ></img> */}
                </div>
                <div style={{display: 'flex'}}>
                    <div className="socials">
                        {walletActive && !wallet.address ? <div id="connect-wallet" style={{width: 122, marginRight: 10}}>
                            <Button className="custom-button small-social connect-button" style={{fontSize: 10}} onClick={onConnectWallet}> Connect Wallet</Button>
                        </div> : walletActive && wallet.address ?
                        <div style={{width: 122,display: 'flex',alignItems: 'center', justifyContent: 'center', marginRight: 10}}>
                            <VerifiedIcon style={{color: '#ffffff', fontSize: 18, paddingRight: 6}} />
                            <label style={{fontSize: 14, color: '#ffffff'}}>{wallet.snippet}</label>
                        </div> : null
                        }
                    </div>                    
                </div>
                
            </div>
        </div>
    )
}

export default NavBar;