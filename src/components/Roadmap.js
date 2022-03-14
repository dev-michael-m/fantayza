import React from 'react';
import VerticalStepper from './VerticalStepper';
import RoadmapImg from '../assets/FNFT_Website07.png';
import '../stylesheet/RoadMap.css';

const DETAILS = [
    {
        label: 'Q2',
        subSteps: [
            {
                description: `-Minting of Fantazya collection end of April/early May 2022.`
            },
            {
                description: `-Exclusive merchandise - Early May`
            }
        ]
    },
    {
        label: 'Q3',
        subSteps: [
            {
                description: `-DAO governance and AZYA utility token mid May`
            },
            {
                description: `-Role assignment of holders mid May`
            },
            {
                description: `-NFT staking mid May`
            }
        ]
    },
    {
        label: 'Q4',
        subSteps: [
            {
                description: `-Movie director and animation team recruitment early June`
            },
            {
                description: `-Minting of Fantazya 3D collection and free NFT airdrops to holders June`
            }
        ]
    },
    {
        label: 'Q5',
        subSteps: [
            {
                description: `-Development of Fantazya animated series - Early July`
            },
            {
                description: `-Distribution of ticket sales to holders - July`
            }
        ]
    },
]

const Roadmap = () => {

    return (
        <div id="roadmap">
            <h1>Roadmap</h1>
            <VerticalStepper steps={DETAILS} />
            <img className='roadmap-img' src={RoadmapImg}></img>
            <h2>Phase II to be confirmed by the holders</h2>
        </div>
    )
}

export default Roadmap;