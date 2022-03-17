import React, {useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckIcon from '@mui/icons-material/CheckCircleOutline';
import TextField from '@mui/material/TextField';
//import {mintNFT, getSoldOut} from './../utilities/util';
import '../stylesheet/Hero.css';
import CircularProgress from '@mui/material/CircularProgress';
import { ethers } from "ethers";
import CustomModal from './Modal';
import FadeInContainer from './FadeInContainer';
const NETWORK = 'etherscan';

const Hero = ({soldOut,wallet,onAlert,onConnectWallet,saleActive,pubSale}) => {
    const [tokens,setTokens] = useState(10);
    const [refreshTimer,setRefreshTimer] = useState(false);
    const [minting,setMinting] = useState(false);
    const [txn,setTxn] = useState(null);
    const [modalOpen,setModalOpen] = useState(false);
    const [imgSeed,setImgSeed] = useState([0,1,2]);
    
    useEffect(() => {
        let mounted = true;

        if(mounted){
            generateImageSeed();
        }

        return () => {
            mounted = false;
        }
    },[])

    const generateImageSeed = () => {
        const shuffledImages = imgSeed.sort((a,b) => 0.5 - Math.random());
        setImgSeed(shuffledImages);
    }

    // const onMint = async () => {
    //     const sold_out = await getSoldOut();

    //     if(!sold_out.data){
    //         if(wallet.address){
                
    //             setMinting(true);
    //             await mintNFT('public',tokens).then(res => {
    //                 const txHash = res.data;
    //                 const provider = new ethers.providers.Web3Provider(window.ethereum);
    //                 const progress = setInterval(() => {
    //                     provider.getTransactionReceipt(txHash).then(status => {
    //                         if(!status){
    //                             //console.log({status})
    //                         }else if(status.status){
    //                             setTxn(status.transactionHash);
    //                             setMinting(false);
    //                             setModalOpen(true);
    //                             clearInterval(progress);
    //                         }
    //                     }).catch(error => {
    //                         console.error(error);
    //                         clearInterval(progress);
    //                         setMinting(false);
    //                     });
    //                 },1000)
    //             }).catch(error => {
    //                 console.error(error);
    //                 onAlert(
    //                     'error',
    //                     error.msg,
    //                     true
    //                 )
    //                 setMinting(false);
    //             })      
    //         }else{
    //             onAlert("warning", 'You must first connect your wallet before trying to mint.', true);
    //         }   
    //     }else{
    //         onAlert(
    //             'error',
    //             'All Larva Lords have been minted!',
    //             true
    //         )
    //     } 
    // }

    const mintMinus = () => {
        if(tokens > 1){
            setTokens(prevState => prevState - 1);
        }        
    }

    const mintAdd = () => {
        if(tokens < 10){
            setTokens(prevState => prevState + 1);
        }
    }

    const onSocialClick = (event) => {
        const social = event.target.id;
        
        switch(social){
            case 'twitter': document.getElementById('twitter-link-hero').click();
                break;
            case 'discord': document.getElementById('discord-link-hero').click();
                break;
            case 'opensea': document.getElementById('opensea-link-hero').click();
                break;
            case 'etherscan': document.getElementById('etherscan-link-hero').click();
              break;
        }
    }

    const onRefresh = () => {
        window.location.reload();
    }

    const onModalClose = () => {
        setModalOpen(false);
    }

    return (
      <div className="hero-container">
        {txn ? (
          <CustomModal
            id="mint-success"
            width="352px"
            visible={modalOpen}
            onClose={onModalClose}
          >
            <h1 style={{ textAlign: "center" }}>Mint Successful!</h1>
            <CheckIcon className="check-success" />
            <p>
              You can find more details about your transaction by clicking{" "}
              <a
                style={{ color: "#d2bb90" }}
                href={`https://${NETWORK}.io/tx/${txn}`}
                target="_blank"
              >
                here
              </a>
            </p>
          </CustomModal>
        ) : null}
        <div id="inner-hero" className='inner-hero'>
        <FadeInContainer animation="fade-in">
          <div style={{padding: '340px 0px'}}>
            <div style={{ margin: 30 }}>
              {/* <Button
                style={{height: 36}}
                className='custom-button secondary small'
                variant="contained"
                onClick={onConnectWallet}
              >
                mint
              </Button> */}
            </div>
          </div>
        </FadeInContainer>
        </div>
        
        
        <div id="welcome-section" className="section-large primary-section spacing-medium welcome-section">
          <FadeInContainer animation="fade-left">
            <div className='hero-section-doc'>
              <p>
                <b>Fantazya</b> - she lives alone in forgotten dwellings, walks along dark alleys,
                and stays in the shadows to avoid the eyes of the National Service Bureau (NSB) who
                are after her for her 'gifts'.
            </p>
            <p> 
                Earlier in her childhood, her mother was assassinated by the NSB, so her father
                took her into hiding. 
            </p>
            <p>
              Three years later, the NSB assassinated her father, while <b>Fantazya</b> barely escaped,
              she has been in hiding ever-since.
            </p>
            <p>
              Being exposed to extreme X-Rays when she was a baby made her 'gifts' endless and her mutations
              unique at 3,333.
            </p>
            </div>
          </FadeInContainer>
        </div>
      </div>
    );
}

export default Hero
