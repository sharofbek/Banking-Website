import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Logos.scss'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade'


import Westin from './img/image 3.png'
import Ummit from './img/image 4.png'
import Holcim from  './img/image 5.png'
import Etv from './img/image 6.png'

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Logos = () => {
    return (
        <Fade top cascade>
            <div className='logos'>
                <p>BUSINESS PARTNERS</p>
                <div className={'logotips'}>
                    <img src={Westin} alt=""/>
                    <img src={Ummit} alt=""/>
                    <img src={Holcim} alt=""/>
                    <img src={Etv} alt=""/>
                </div>
                <Carousel className='carousel' responsive={responsive}>
                    <img src={Westin} alt=""/>
                    <img src={Ummit} alt=""/>
                    <img src={Holcim} alt=""/>
                    <img src={Etv} alt=""/>
                </Carousel>
            </div>
        </Fade>
    );
};

export default Logos;