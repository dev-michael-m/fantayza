import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery';

const TOTAL_PROG = 180;

const opts = {
    threshold: 0.02
}

const FadeInContainer = (props) => {
    const [visible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    setVisible(entry.isIntersecting);
                    const parentEl = entry.target.parentElement.id;
                    
                    if(parentEl){
                        console.log({parentEl})
                        $(`#${parentEl}`).addClass('lazy');            
                    }                    
                }
            })
        },opts);

        observer.observe(domRef.current);

        return () => observer.unobserve(domRef.current);
    },[])

    return (
        <div
            className={`${props.animation == 'fade-in' ? 'fade-in-section' : props.animation == 'fade-x' ? 'fade-in-section-x' : 
            props.animation == 'fade-left' ? 'fade-in-left' : props.animation == 'fade-right' ? 'fade-in-right' : props.animation == 'fade-bottom' ? 'fade-in-bottom' : 
            'ease-in-section'} ${visible ? 'is-visible' : ''} ${props.className ? props.className : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    )
}

export default FadeInContainer
