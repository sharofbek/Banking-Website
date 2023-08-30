import React from 'react';
import './About.scss'
import Img from './Image.png'
import Arrow from './right arrow.png'
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div className={'about'}>
           <Fade left>
               <div className="foto">
                   <img src={Img} alt=""/>
               </div>
           </Fade>
            <Fade right>
                <div className="text">
                    <h2>IPDC AT A GLANCE</h2>
                    <p>
                        IPDC Finance Limited (previously known as "Industrial
                        Promotion and Development Company of Bangladesh Limited") is
                        the first private sector financial institution of the country established in 1981
                        by a distinguished group of shareholders namely International Finance Corporation (IFC), USA,
                        German Investment and Development Company (DEG), Germany, The Aga Khan Fund for Economic Development
                        (AKFED), Switzerland, Commonwealth Development Corporation (CDC), UK and the Government of Bangladesh
                    </p>
                    <button>Read More <img src={Arrow} alt=""/></button>
                </div>
            </Fade>
        </div>
    );
};

export default About;