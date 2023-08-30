import React, {useEffect, useState} from 'react';
import './CreateStyle.scss'
import axios from "axios";
import Int from './img/Circle Layer.png'
import Gallery from './img/Scenery.png'
import Cube from './img/Object Ungroup.png'
import User from './img/User Arrows.png'
import Rocket from './img/Rocket.png'
import Corporate from './img/Bag.png'
import Cub from './img/Cube.png'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade'


const Create = () => {

    const [card ,setCard] = useState([])



    return (
        <div className='Create'>
            <Bounce left><h1>Creating Extraordinary Customer Experience</h1></Bounce>
            <Bounce right>
                <p className={'p'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum eget morbi dignissim eu pharetra consequat montes, sagittis.</p>
            </Bounce>


            <Fade top cascade>
                <div className="card-group">
                    <div className='card'>
                            <img src={Int} alt=""/>
                            <h4>Integrity</h4>
                            <p>Displaying the highest level of Integrity in the way we conduct our business</p>
                        </div>
                    <div className='card'>
                        <img src={Gallery} alt=""/>
                        <h4>Demonstrate</h4>
                        <p>Displaying the highest level of Integrity in the way we conduct our business</p>
                    </div>
                    <div className='card'>
                        <img src={Cube} alt=""/>
                        <h4>Diversity</h4>
                        <p>Displaying the highest level of Integrity in the way we conduct our business</p>
                    </div>
                    <div className='card'>
                        <img src={User} alt=""/>
                        <h4>Teamwork</h4>
                        <p>Displaying the highest level of Integrity in the way we conduct our business</p>
                    </div>
                    <div className='card'>
                        <img src={Int} alt=""/>
                        <h4>Collaboration</h4>
                        <p>Displaying the highest level of Integrity in the way we conduct our business</p>
                    </div>
                    <div className='card'>
                        <img src={Rocket} alt=""/>
                        <h4>Technology</h4>
                        <p>Displaying the highest level of Integrity in the way we conduct our business</p>
                    </div>
                    <div className='card'>
                        <img src={Corporate} alt=""/>
                        <h4>Corporate</h4>
                        <p>Displaying the highest level of Integrity in the way we conduct our business</p>
                    </div>
                    <div className='card'>
                        <img src={Cub} alt=""/>
                        <h4>Digital</h4>
                        <p>Displaying the highest level of Integrity in the way we conduct our business</p>
                    </div>

                </div>
            </Fade>

        </div>
    );
};

export default Create;