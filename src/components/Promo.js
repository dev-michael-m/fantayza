import React from 'react'
import FadeInContainer from './FadeInContainer';

const imgs = [
]

const Promo = ({styling = 'default', animated = false, glow = false, seed = [0,1,2]}) => {
    return (
        <div style={{margin: '80px 0px'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                {animated && animated == 'multi-direction' ? 
                    <div className={animated ? 'float-slow' : null} style={{position: 'relative', left: styling === 'default' ? '10%' : '2%', opacity: '90%'}}>
                        <FadeInContainer animation="fade-left">
                            <img className={`nft-img-side ${glow ? 'glow' : ''}`} src={imgs[seed[0]]}></img>
                        </FadeInContainer>
                    </div> :
                <div className={animated ? 'float-slow' : null} style={{position: 'relative', left: styling === 'default' ? '10%' : '2%', opacity: '90%'}}>
                    <img className={`nft-img-side ${glow ? 'glow' : ''}`} src={imgs[seed[0]]}></img>
                </div>
                }
                
                {animated && animated == 'multi-direction' ?
                    <div className={animated ? 'float-slow' : null} style={{position: 'relative',right: '3%',zIndex: 10}}>
                        <FadeInContainer animation="fade-bottom">
                            <img src={imgs[seed[1]]} className={`nft-img-front ${glow ? 'glow' : ''}`}></img>
                        </FadeInContainer>
                    </div> :
                <div className={animated ? 'float-slow' : null} style={{position: 'relative',right: '3%',zIndex: 10}}>
                    <img src={imgs[seed[1]]} className={`nft-img-front ${glow ? 'glow' : ''}`}></img>
                </div>
                }
                

                {animated && animated == 'multi-direction' ? 
                    <div className={animated ? 'float-slow' : null} style={{position: 'relative', right: styling === 'default' ? '10%' : '2%', opacity: '90%'}}>
                        <FadeInContainer animation="fade-right">
                            <img className={`nft-img-side ${glow ? 'glow' : ''}`} src={imgs[seed[2]]}></img>
                        </FadeInContainer>
                    </div> :
                <div className={animated ? 'float-slow' : null} style={{position: 'relative', right: styling === 'default' ? '10%' : '2%', opacity: '90%'}}>
                    <img className={`nft-img-side ${glow ? 'glow' : ''}`} src={imgs[seed[2]]}></img>
                </div>
                }
            </div>
                      
        </div>
    )
}

export default Promo
