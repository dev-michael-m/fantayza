import React from 'react';
import '../stylesheet/RoadMap.css';
import BodyImage from '../assets/FNFT_Character_Body2.png';
import CheckMark from '@mui/icons-material/Check';
import Pending from '@mui/icons-material/PendingOutlined';
import Downloading from '@mui/icons-material/Downloading';

const Roadmap = () => {

    return (
        <div className='roadmap' id="roadmap">
            <div className='roadmap-wrapper'>
                <div className='flex-align-center' style={{position: 'relative'}}>
                    <div className='dynamic-padding-lrg' style={{width: '50%',position: 'relative', top: 150}}>
                        <img src={BodyImage} width="100%"></img>
                    </div>
                    <div className='roadmap-inv' style={{width: '50%'}}>
                        <div className='inv-inner'>
                            <h1 style={{margin: 0}}>Roadmap</h1>
                            <div className='flex-align-center'>
                                <div className='roadmap-icon'>
                                    <CheckMark />
                                </div>
                                <h3>Drawing of Fantazya Collection</h3>
                            </div>
                            <div className='flex-align-center'>
                                <div className='roadmap-icon'>
                                    <CheckMark />
                                </div>                                
                                <h3>Smart Contract Development</h3>
                            </div>                                                        
                            <div className='flex-align-center'>
                                <div className='roadmap-icon'>
                                    <Downloading />
                                </div>
                                <h3>Constructing the Story</h3>
                            </div>
                            <div className='flex-align-center'>
                                <div className='roadmap-icon'>
                                    <Downloading />
                                </div>
                                <h3>Preparing the Narrative</h3>
                            </div>
                            <div className='flex-align-center'>
                                <div className='roadmap-icon'>
                                    <Pending />
                                </div>
                                <h3>Deployment and Testing of Smart Contract</h3>
                            </div>
                            <div className='flex-align-center'>
                                <div className='roadmap-icon'>
                                    <Pending />
                                </div>
                                <h3>Smart Contract Audit</h3>
                            </div>
                            <div className='flex-align-center'>
                                <div className='roadmap-icon'>
                                    <Pending />
                                </div>
                                <h3>Minting of Fantazya Collection</h3>
                            </div>
                            <div>
                               <p className='text-center'><b>Phase II Coming Soon...</b></p>
                            </div>
                        </div>
                    </div>                    
                </div>                
            </div>
        </div>
    )
}

export default Roadmap;