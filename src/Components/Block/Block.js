import React from 'react';
import './Block.scss'
import Phone from './img/call.png'
import Youtube from './img/youtube.png'
import In from './img/linkedin.png'
import Insta from './img/instagram.png'
import Facebook from './img/facebook.png'
import Family from './img/t2PuBsfgkl__1_-removebg-preview (1) 1.png'
import Car from './img/car.png'
import House from './img/House.png'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade'


const Block = () => {
    return (
        <div className='block'>

            <Bounce left cascade>
                <div className="text">
                    <h1 className='h1'>Chase Your Dream with us</h1>
                    <p>The harder you work for something, the greater you’ll feel when you achieve it.</p>
                    <div className="txtBtns">
                        <button className="btn1">APPLY ONLINE</button>
                        <button className="btn2">LOAN CALCULATOR</button>
                    </div>
                    <div className="social">
                        <span> <img src={Phone} alt=""/>16519 </span> |
                        <img src={Facebook} alt=""/>
                        <img src={Youtube} alt=""/>
                        <img src={In} alt=""/>
                        <img src={Insta} alt=""/>

                    </div>
                </div>
            </Bounce>
            <Fade bottom cascade>
                <div className="loans">
                    <button className="car-btn"><img src={Car} alt=""/> Car Loans</button>
                    <button className="home-btn"><img src={House} alt=""/>Home Loan</button>
                </div>
            </Fade>

            <div className="photo">
                <Fade right>
                    <div className="back">
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Block;