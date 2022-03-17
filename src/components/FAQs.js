import React, {useState} from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import '../stylesheet/FAQs.css';
import FadeInContainer from './FadeInContainer';

const FAQs = () => {
    const [expanded,setExpanded] = useState(false);

    const onAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    return (
        <div id="faqs" className='faq-container project-background2'>
            <FadeInContainer animation="fade-in">
                <h1>FAQs</h1>
            </FadeInContainer>
            <div style={{marginTop: 60}}>
            <FadeInContainer animation="fade-in">
            <Accordion className={`accordian-container ${expanded === 'f0' ? 'accordian-selected' : ''}`} id="f0" expanded={expanded === 'f0'} onChange={onAccordionChange('f0')}>
                <AccordionSummary expandIcon={expanded === 'f0' ? <CloseIcon style={{color: 'black'}} /> : <AddIcon style={{color: 'black'}} />}>
                    <p>What is an NFT?</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontWeight: 'normal'}}>
                        <b>NFT or "Non Fungible Token", is a unique digital asset that cannot be replicated or interchanged with another.
                        NFT's can be any asset in digital asset (art, music, tickets are just a few examples).</b>
                    </p>
                </AccordionDetails>
            </Accordion>
            </FadeInContainer>
            <FadeInContainer animation="fade-in">
            <Accordion className={`accordian-container ${expanded === 'f1' ? 'accordian-selected' : ''}`} id="f1" expanded={expanded === 'f1'} onChange={onAccordionChange('f1')}>
                <AccordionSummary expandIcon={expanded === 'f1' ? <CloseIcon style={{color: 'black'}} /> : <AddIcon style={{color: 'black'}} />}>
                    <p>What does "Mint" mean?</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontWeight: 'normal'}}><b>Minting is the process of transferring the ownership of an NFT into your wallet and to be stored on the blockchain.</b></p>
                </AccordionDetails>
            </Accordion>
            </FadeInContainer>
            <FadeInContainer animation="fade-in">
            <Accordion className={`accordian-container ${expanded === 'f2' ? 'accordian-selected' : ''}`} id="f2" expanded={expanded === 'f2'} onChange={onAccordionChange('f2')}>
                <AccordionSummary expandIcon={expanded === 'f2' ? <CloseIcon style={{color: 'black'}} /> : <AddIcon style={{color: 'black'}} />}>
                    <p>When will the collection drop?</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontWeight: 'normal'}}><b>April 2022.</b></p>
                </AccordionDetails>
            </Accordion>
            </FadeInContainer>
            <FadeInContainer animation="fade-in">
            <Accordion className={`accordian-container ${expanded === 'f3' ? 'accordian-selected' : ''}`} id="f3" expanded={expanded === 'f3'} onChange={onAccordionChange('f3')}>
                <AccordionSummary expandIcon={expanded === 'f3' ? <CloseIcon style={{color: 'black'}} /> : <AddIcon style={{color: 'black'}} />}>
                    <p>How much will it cost?</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontWeight: 'normal'}}><b>Mint price is TBA</b></p>
                </AccordionDetails>
            </Accordion>
            </FadeInContainer>
            <FadeInContainer animation="fade-in">
            <Accordion className={`accordian-container ${expanded === 'f4' ? 'accordian-selected' : ''}`} id="f4" expanded={expanded === 'f4'} onChange={onAccordionChange('f4')}>
                <AccordionSummary expandIcon={expanded === 'f4' ? <CloseIcon style={{color: 'black'}} /> : <AddIcon style={{color: 'black'}} />}>
                    <p>How many NFT's will be available?</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontWeight: 'normal'}}><b>3,333</b></p>
                </AccordionDetails>
            </Accordion>
            </FadeInContainer>
            <FadeInContainer animation="fade-in">
            <Accordion className={`accordian-container ${expanded === 'f5' ? 'accordian-selected' : ''}`} id="f5" expanded={expanded === 'f5'} onChange={onAccordionChange('f5')}>
                <AccordionSummary expandIcon={expanded === 'f5' ? <CloseIcon style={{color: 'black'}} /> : <AddIcon style={{color: 'black'}} />}>
                    <p>How can I get access to the whitelist?</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontWeight: 'normal'}}><b>Details are available on our Discord server.</b></p>
                </AccordionDetails>
            </Accordion>
            </FadeInContainer>
            <div className='spacing-medium'>
                <Button className='custom-button medium' variant="outlined" onClick={() => document.getElementById('discord-link').click()}>Join the Community</Button>
            </div> 
            </div>
        </div>
    )
}

export default FAQs;
