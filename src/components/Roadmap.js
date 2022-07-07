import React from 'react';
import '../stylesheet/RoadMap.css';
import BodyImage from '../assets/FNFT_Character_Body2.png';
import CheckMark from '@mui/icons-material/Check';
import Pending from '@mui/icons-material/PendingOutlined';
import Downloading from '@mui/icons-material/Downloading';
import Searching from '@mui/icons-material/ScreenSearchDesktop';

const Roadmap = () => {

    return (
        <div className='roadmap' id="roadmap">
            <div className='roadmap-wrapper'>
                <div className='roadmap-inner' style={{position: 'relative', paddingBottom: '12%'}}>
                    <div className='roadmap-img'>
                        <img src={BodyImage} width="100%"></img>
                    </div>
                    <div className='roadmap-inv'>
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
                                <h1>Phase II</h1>
                            </div>
                            <div className='flex-align-center'>
                                <div className='roadmap-icon'>
                                    <Pending />
                                </div>
                                <h3>Development of Full Body Avatar</h3>
                            </div>
                            <div className='flex-align-center'>
                                <div className='roadmap-icon'>
                                    <Pending />
                                </div>
                                <h3>Design of Merchandise</h3>
                            </div>
                            <div className='flex-align-center'>
                                <div className='roadmap-icon'>
                                    <Searching />
                                </div>
                                <h3>AZYA Token</h3>
                            </div>
                            <div className='flex-align-center'>
                                <div className='roadmap-icon'>
                                    <Searching />
                                </div>
                                <h3>Fantazya DAO</h3>
                            </div>
                            <div className='flex-align-center'>
                                <div className='roadmap-icon'>
                                    <Pending />
                                </div>
                                <h3>Full Body Avatar Mint</h3>
                            </div>
                            <div>
                                <h1>Phase III</h1>
                            </div>
                            <div className='flex-align-center'>
                                <div className='roadmap-icon'>
                                    <Downloading />
                                </div>
                                <h3>Script of First Episode</h3>
                            </div>
                            <div className='flex-align-center'>
                                <div className='roadmap-icon'>
                                    <Downloading />
                                </div>
                                <h3>Script of Second Episode</h3>
                            </div>
                            <div className='flex-align-center'>
                                <div className='roadmap-icon'>
                                    <Pending />
                                </div>
                                <h3>Script of Third Episode</h3>
                            </div>
                            <div className='flex-align-center'>
                                <div className='roadmap-icon'>
                                    <Pending />
                                </div>
                                <h3>Script of Fourth Episode</h3>
                            </div>
                            <div className='flex-align-center'>
                                <div className='roadmap-icon'>
                                    <Pending />
                                </div>
                                <h3>Script of Fifth Episode</h3>
                            </div>
                            <div className='flex-align-center'>
                                <div className='roadmap-icon'>
                                    <Downloading />
                                </div>
                                <h3>Select Production Team</h3>
                            </div>
                            <div className='flex-align-center'>
                                <div className='roadmap-icon'>
                                    <Pending />
                                </div>
                                <h3>Metaverses to be Displayed in</h3>
                            </div>
                            <div className='flex-align-center'>
                                <div className='roadmap-icon'>
                                    <Pending />
                                </div>
                                <h3>Minting of AZYA Pass</h3>
                            </div>
                        </div>
                    </div>                    
                </div>                
            </div>
        </div>
    )
}

export default Roadmap;