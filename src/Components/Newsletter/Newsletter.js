import React from 'react';
import './News.scss'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade'


const Newsletter = () => {
    return (
        <div className='newsletter'>
            <Fade left>
                <h1>Newsletter</h1>
            </Fade>
            <Fade right>
                <p className="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac quis aliquam arcu lacus.
                </p>
            </Fade>

            <Bounce top cascade>
                <form>
                    <input placeholder='Your Email' type="email"/>
                    <button>Subscribe</button>
                </form>
            </Bounce>
        </div>
    );
};

export default Newsletter;