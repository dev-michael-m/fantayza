import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import VerticalStepper from './VerticalStepper';

const DETAILS = [
    {
        label: 'Q2',
        subSteps: [
            {
                description: `- Minting of Fantayza collection in April 2022`
            },
            {
                description: `- Role assignment of holders & grants`
            },
            {
                description: `- Exclusive merchandise & action figures for holders`
            }
        ]
    },
    {
        label: 'Q3',
        subSteps: [
            {
                description: `  - Minting of Super Rays Q3 2022`
            },
            {
                description: `  - Establishment of movie theater in the metaverse`
            },
            {
                description: `  - Development of Fantayza animated series`
            }
        ]
    },
    {
        label: 'Q4',
        subSteps: [
            {
                description: `- DAO setup & tokenization`
            },
            {
                description: `- Distribution of ticket sales to holders`
            }
        ]
    }
]

const Roadmap = () => {

    return (
        <div>
            <h1>Roadmap</h1>
            <VerticalStepper steps={DETAILS} />
            <h2>Phase II to be confirmed by the holders</h2>
        </div>
    )
}

export default Roadmap;