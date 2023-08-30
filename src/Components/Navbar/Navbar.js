import React, {useEffect, useState} from 'react';
import Logo from './img/image-removebg-preview (10) 1 (1).png'
import {Link} from "react-router-dom";
import Search from './img/Magnifier.png'
import './Navbar.scss'
import '../CreateBlock/CreateStyle.scss'
import axios from "axios";
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade'


const Navbar = () => {
    const [card ,setCard] = useState([])

     const Searching = (e) => {
         let btn = document.getElementById('searchBtn')
         let BtnForm = document.getElementById('btnForm')
         let search = document.getElementById('searchInput')
         search.classList.toggle('activeInput')
         btn.classList.toggle('btnActive')
         BtnForm.classList.toggle('formActiveBtn')
    }

    return (
        <div>
            <Fade  cascade>
                <nav className='nav'>
                    <input type="checkbox" id="nav-check"/>
                    <div className="nav-header">
                        <div className="logo">
                            <img src={Logo} alt=""/>
                        </div>
                    </div>
                    <div className="nav-btn">
                        <label htmlFor="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                    <div className="nav-links">
                        <Bounce top cascade>
                            <ul>
                                <li><Link className='li' to=''>RETAIL</Link></li>
                                <li><Link className='li' to=''>SME</Link></li>
                                <li><Link className='li' to=''>COMPORATE</Link></li>
                                <li><Link className='li' to=''>ABOUT US</Link></li>
                                <li><Link className='li' to=''>COVID 19</Link></li>
                                <li><Link className='li' to=''>CAMPGAINS</Link></li>
                            </ul>
                        </Bounce>
                        <div className='buttons'>

                            <form>
                                <button type={'button'} className='searchBtn' id='searchBtn' onClick={Searching}>
                                    <img src={Search} alt=""/>
                                </button>
                                <input type="text" placeholder={'Search...'} className='searchInput' id='searchInput'/>
                                <button onClick={Searching} type='button' className={'btnForm'} id='btnForm'> <img src={Search} alt=""/> </button>
                            </form>

                            <button className='btn-nav'>
                                iSERVICE
                            </button>
                        </div>
                    </div>
                </nav>
            </Fade>
        </div>
    );
};
export default (Navbar);