import React from 'react';
import './Service.scss'
import Coin from './img/Image (1).png'
import Parachute from './img/Image (2).png'
import Deposit from './img/Image (3).png'
import Taxi from './img/Image (4).png'
import Arrow from './img/right arrow.png'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade'


const Service = () => {
    return (
       <Fade top cascade>
           <div className='service'>
               <h1>Our Services</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.</p>

               <Bounce left cascade>
                   <div className="service-cards">
                       <div className="service-card">
                           <img src={Coin} alt=""/>
                           <h3><b>IPDC SAVING SCHEMES</b> <img src={Arrow} alt=""/></h3>
                       </div>
                       <div className="service-card">
                           <img src={Parachute} alt=""/>
                           <h3><b>IPDC Personal loan</b> <img src={Arrow} alt=""/></h3>
                       </div>
                       <div className="service-card">
                           <img src={Deposit} alt=""/>
                           <h3><b>IPDC Deposit schemes</b> <img src={Arrow} alt=""/></h3>
                       </div>
                       <div className="service-card">
                           <img src={Taxi} alt=""/>
                           <h3><b>IPDC auto loan</b> <img src={Arrow} alt=""/></h3>
                       </div>

                   </div>
               </Bounce>
           </div>
       </Fade>
    );
};

export default Service;