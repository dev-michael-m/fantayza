import React, {useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FadeInContainer from './FadeInContainer';
import DiscordIcon from '../assets/discordblack.png';
import OpenSeaIcon from '../assets/openseablack.jpg';
import TwitterIcon from '@mui/icons-material/Twitter';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckIcon from '@mui/icons-material/CheckCircleOutline';
import TextField from '@mui/material/TextField';
import {getPublicState, mintNFT, getSoldOut} from './../utilities/util';
import Promo from './Promo';
import CustomModal from './Modal';
import Banner from '../assets/llbanner.png';
import VerifiedIcon from '@mui/icons-material/Verified';
import CircularProgress from '@mui/material/CircularProgress';

require('dotenv').config();
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const web3 = createAlchemyWeb3(alchemyKey);

const Hero = ({soldOut,wallet,onAlert,onConnectWallet}) => {
    const [tokens,setTokens] = useState(10);
    const [refreshTimer,setRefreshTimer] = useState(false);
    const [saleActive,setSaleActive] = useState(false);
    const [preSale,setPreSale] = useState(false);
    const [pubSale,setPubSale] = useState(false);
    const [minting,setMinting] = useState(false);
    const [txn,setTxn] = useState(null);
    const [modalOpen,setModalOpen] = useState(false);
    const [imgSeed,setImgSeed] = useState([0,1,2]);
    
    useEffect(() => {
        let mounted = true;

        if(mounted){
            (async () => {
                const publicSale = await getPublicState();
                console.log({publicSale})
                if(publicSale.status){
                    if(publicSale.active){
                        setSaleActive(true);
                        setPubSale(publicSale.active);
                    }
                }
            })();

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

    const onMint = async () => {
        const sold_out = await getSoldOut();

        if(!sold_out.data){
            if(wallet.address){
                
                setMinting(true);
                await mintNFT(preSale ? 'presale' : pubSale ? 'public' : null,tokens).then(res => {
                    const txHash = res.data;
        
                    const progress = setInterval(() => {
                        web3.eth.getTransactionReceipt(txHash).then(status => {
                            if(!status){
                                //console.log({status})
                            }else if(status.status){
                                setTxn(status.transactionHash);
                                setMinting(false);
                                setModalOpen(true);
                                clearInterval(progress);
                            }
                        }).catch(error => {
                            console.error(error);
                            clearInterval(progress);
                            setMinting(false);
                        })
                    },1000)
                }).catch(error => {
                    console.error(error);
                    onAlert(
                        'error',
                        error.msg,
                        true
                    )
                    setMinting(false);
                })      
            }else{
                onAlert("warning", 'You must first connect your wallet before trying to mint.', true);
            }   
        }else{
            onAlert(
                'error',
                'All FOMO SAPIENS have been minted!',
                true
            )
        } 
    }

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
                href={`https://ropsten.etherscan.io/tx/${txn}`}
                target="_blank"
              >
                here
              </a>
            </p>
          </CustomModal>
        ) : null}
        <div>
          <img src={Banner} width="100%"></img>
        </div>
        <div id="welcome-section" className="section-large primary-section">
          <FadeInContainer animation="fade-in">
            <div style={{ marginBottom: "12%" }}>
                <h2>WELCOME</h2>
              <p style={{ color: "black" }}>
                Join the world of <b>5,432</b> Larva Lord apes and witness how they
                will evolve! (Yes! They will evolve). We took inspiration from
                the world of Larva Lads and Bored Apes, and merged both concepts
                together to make the Larva Lords come to life, and they want to
                conquer all! They are lords after all.
            </p>
            <p style={{ color: "black" }}> 
                There is no roadmap here, we love our art and believe in it, so we want to
                keep it simple: Our <b>Larva Lords</b> will evolve into full
                grown entities, and our holders will receive one of them for free by holding 2 or more Larva Lords.
                Whoever's lucky enough to mint King Larva will receive <b>1.0 ETH</b>. We're not going to stop there. There will be an
                additional 6 more prizes for a combined total of 3.0 ETH (because that's how we
                roll :P). 
            </p>
            <p style={{ color: "black" }}>  
                Join the evolution and vibe with us, the moon is the
                limit! Mint one of the legendary <b>Larva Lords</b> below and claim your prize. For
                more information, follow us on Twitter, and Discord.
            </p>
            </div>
          </FadeInContainer>
        </div>
        <div>
          <FadeInContainer>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: 300,
                alignItems: "center",
                margin: "0px auto 40px",
              }}
            >
              <div id="twitter">
                <IconButton
                  id="twitter"
                  style={{ width: 40 }}
                  onClick={onSocialClick}
                >
                  <TwitterIcon
                    id="twitter"
                    style={{ fontSize: 26, color: "black" }}
                  />
                  <a
                    id="twitter-link-hero"
                    hidden
                    target="_blank"
                    href="https://twitter.com/LarvaLords"
                  ></a>
                </IconButton>
              </div>
              <div id="discord">
                <IconButton
                  id="discord"
                  style={{ width: 40 }}
                  onClick={onSocialClick}
                >
                  <img
                    id="discord"
                    style={{ margin: "0px 10px" }}
                    src={DiscordIcon}
                    width="26px"
                  ></img>
                  <a id="discord-link-hero" hidden target="_blank" href="https://discord.gg/mH286nzJsC"></a>
                </IconButton>
              </div>
              <div id="opensea">
                <IconButton
                  id="opensea"
                  style={{ width: 40 }}
                  onClick={onSocialClick}
                >
                  <img
                    id="opensea"
                    style={{ margin: "0px 10px" }}
                    src={OpenSeaIcon}
                    width="26px"
                  ></img>
                  <a id="opensea-link-hero" hidden target="_blank" href="#"></a>
                </IconButton>
              </div>
            </div>
          </FadeInContainer>
        </div>
        <div className="hero-inner">
          <FadeInContainer>
            <div style={{ paddingTop: 30 }}>
              <Promo styling="full" animated="multi-direction" seed={imgSeed} />
            </div>
          </FadeInContainer>
          <div className="countdown-container" id="countdown-container">
            <FadeInContainer>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IconButton onClick={mintMinus}>
                  <RemoveIcon />
                </IconButton>
                <TextField
                  className="mint-num"
                  id="num-tokens"
                  type="number"
                  inputMode="numeric"
                  value={tokens}
                />
                <IconButton onClick={mintAdd}>
                  <AddIcon />
                </IconButton>
              </div>
              <div style={{ margin: 32 }}>
                <Button
                  className={`custom-button primary medium ${
                    soldOut || (!saleActive && !refreshTimer) ? "disabled" : ""
                  }`}
                  disabled={
                    soldOut || minting || (!saleActive && !refreshTimer)
                      ? true
                      : false
                  }
                  variant="contained"
                  color="primary"
                  onClick={saleActive && !refreshTimer ? onMint : onRefresh}
                >
                  {soldOut ? (
                    "Sold Out"
                  ) : minting ? (
                    <CircularProgress style={{ color: "wheat" }} />
                  ) : !saleActive && refreshTimer ? (
                    "Refresh"
                  ) : (
                    "Mint"
                  )}
                </Button>
              </div>
              {!soldOut && !wallet.address ? (
                <div style={{ marginBottom: 30 }}>
                  <Button
                    className={`custom-button secondary medium`}
                    variant="contained"
                    color="primary"
                    onClick={onConnectWallet}
                  >
                    Connect Wallet
                  </Button>
                </div>
              ) : wallet.address ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <VerifiedIcon
                    style={{ color: "#3a677d", fontSize: 18, paddingRight: 6 }}
                  />
                  <label style={{ fontSize: 14, color: "gray" }}>
                    Connected
                  </label>
                </div>
              ) : null}
              {soldOut ? (
                <div>
                  <a
                    style={{ fontSize: 14, margin: 10 }}
                    style={{ color: "gray" }}
                    href="#"
                    target="_blank"
                  >
                    Find us on OpenSea
                  </a>
                </div>
              ) : null}
            </FadeInContainer>
          </div>
        </div>
      </div>
    );
}

export default Hero
