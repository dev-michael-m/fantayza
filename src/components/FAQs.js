import React, {useState} from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import FadeInContainer from './FadeInContainer';
import '../stylesheet/FAQs.css';


const FAQs = () => {
    const [expanded,setExpanded] = useState(false);

    const onAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    return (
        <div className='faq-container'>
            <FadeInContainer animation="fade-in">
                <h1>FAQs</h1>
            </FadeInContainer>
            <div style={{marginTop: 60}}>
            <FadeInContainer animation="fade-in">
            <Accordion className={`accordian-container ${expanded === 'f0' ? 'accordian-selected' : ''}`} id="f0" expanded={expanded === 'f0'} onChange={onAccordionChange('f0')}>
                <AccordionSummary expandIcon={expanded === 'f0' ? <CloseIcon style={{color: 'black'}} /> : <AddIcon style={{color: 'black'}} />}>
                    <p>What are the "Larva Lords"?</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontWeight: 'normal'}}>The <b>Larva Lords</b> is an NFT collection of 5,432 pixel larvas generated algorithmically out of 200+ hand drawn attributes.</p>
                </AccordionDetails>
            </Accordion>
            </FadeInContainer>
            <FadeInContainer animation="fade-in">
            <Accordion className={`accordian-container ${expanded === 'f1' ? 'accordian-selected' : ''}`} id="f1" expanded={expanded === 'f1'} onChange={onAccordionChange('f1')}>
                <AccordionSummary expandIcon={expanded === 'f1' ? <CloseIcon style={{color: 'black'}} /> : <AddIcon style={{color: 'black'}} />}>
                    <p>What are the benefits of owning a Larva Lord?</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontWeight: 'normal'}}>Other than owning a cool digital asset, minting a single Larva Lord will give you a chance to win one of our prizes in ETH.  Moreover, if you mint 2 or more <b>Larva Lords</b> you will be eligible to mint a free evolved larva from our new collection, which will be launching soon after the launch of this project.</p>
                </AccordionDetails>
            </Accordion>
            </FadeInContainer>
            <FadeInContainer animation="fade-in">
            <Accordion className={`accordian-container ${expanded === 'f2' ? 'accordian-selected' : ''}`} id="f2" expanded={expanded === 'f2'} onChange={onAccordionChange('f2')}>
                <AccordionSummary expandIcon={expanded === 'f2' ? <CloseIcon style={{color: 'black'}} /> : <AddIcon style={{color: 'black'}} />}>
                    <p>In which blockchain will this project be deployed on?</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontWeight: 'normal'}}><b>Larva Lords</b> will live forever on the Ethereum blockchain as ERC-721 tokens.</p>
                </AccordionDetails>
            </Accordion>
            </FadeInContainer>
            <FadeInContainer animation="fade-in">
            <Accordion className={`accordian-container ${expanded === 'f3' ? 'accordian-selected' : ''}`} id="f3" expanded={expanded === 'f3'} onChange={onAccordionChange('f3')}>
                <AccordionSummary expandIcon={expanded === 'f3' ? <CloseIcon style={{color: 'black'}} /> : <AddIcon style={{color: 'black'}} />}>
                    <p>Wen launch?</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontWeight: 'normal'}}><b>Larva Lords</b> will be launching in a few days.  We are planning to host a stealth launch, so keep an eye on our Twitter account so you don't miss out on this opportunity.</p>
                </AccordionDetails>
            </Accordion>
            </FadeInContainer>
            <FadeInContainer animation="fade-in">
            <Accordion className={`accordian-container ${expanded === 'f4' ? 'accordian-selected' : ''}`} id="f4" expanded={expanded === 'f4'} onChange={onAccordionChange('f4')}>
                <AccordionSummary expandIcon={expanded === 'f4' ? <CloseIcon style={{color: 'black'}} /> : <AddIcon style={{color: 'black'}} />}>
                    <p>How much will it cost to mint a Larva Lord?</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontWeight: 'normal'}}>The price has not been determined yet.  It will be announced together with the launch date.  One thing is for sure, the price will be affordable for all buyers.</p>
                </AccordionDetails>
            </Accordion>
            </FadeInContainer>
            <FadeInContainer animation="fade-in">
            <Accordion className={`accordian-container ${expanded === 'f5' ? 'accordian-selected' : ''}`} id="f5" expanded={expanded === 'f5'} onChange={onAccordionChange('f5')}>
                <AccordionSummary expandIcon={expanded === 'f5' ? <CloseIcon style={{color: 'black'}} /> : <AddIcon style={{color: 'black'}} />}>
                    <p>Where can I mint a Larva Lord?</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontWeight: 'normal'}}>You will be able to mint your <b>Larva Lord</b> directly from our website during the public sale.</p>
                </AccordionDetails>
            </Accordion>
            </FadeInContainer>
            </div>
        </div>
    )
}

export default FAQs;
