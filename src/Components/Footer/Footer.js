import React from 'react';
import './Footer.scss'
import Facebook from './img/facebook.png'
import Youtube from './img/youtube.png'
import In from './img/linkedin.png'
import Insta from './img/instagram.png'
import Call from './img/call.png'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade'


const Footer = () => {
    return (
        <Bounce bottom cascade>
            <div className="footer">
                <div className="footer-div">
                    <h4>About the company</h4>
                    <p>Learn To Love Growth And Change And You Will Be A Success. Microsoft Patch </p>
                    <div className="social">
                        <img src={Facebook} alt=""/>
                        <img src={Youtube} alt=""/>
                        <img src={In} alt=""/>
                        <img src={Insta} alt=""/>
                    </div>
                </div>
                <div className="footer-div">
                    <h4>Products</h4>
                    <p>CSR Activities</p>
                    <p> Green Banking </p>
                    <p> News </p>
                    <p> Ongoing Campgain </p>
                    <p> Updates </p>
                </div>
                <div className="footer-div">
                    <h4>Get Started</h4>
                    <p>Career</p>
                    <p> Contact Us </p>
                    <p> Government Securities </p>
                    <p> Examples </p>
                    <p> NIS </p>
                </div>
                <div className="footer-div">
                    <h4>About</h4>
                    <p>IPDC at a Glance</p>
                    <p> Mission, VIsion & Values </p>
                    <p> Corporate Governanace </p>
                    <p> Shareholders </p>
                    <p> Investor Relations </p>
                </div>

                <div className="footer-div">
                    <h4 className='h4'><img src={Call} alt=""/> 16519</h4>
                </div>
            </div>
        </Bounce>

    );
};

export default Footer;