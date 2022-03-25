import React from 'react';
import RoadmapImg from '../assets/FNFT_Roadmap_v001.jpg';
import '../stylesheet/RoadMap.css';

const Roadmap = () => {

    return (
        <div id="roadmap">
            <h1 style={{paddingBottom: 50}}>Roadmap</h1>
            <img src={RoadmapImg} width="100%"></img>
        </div>
    )
}

export default Roadmap;