import React from 'react';
import './App.scss'
import Navbar from "./Components/Navbar/Navbar";
import Block from "./Components/Block/Block";
import Create from "./Components/CreateBlock/Create";
import Logos from "./Components/Logotips/Logos";
import About from "./Components/About/About";
import Service from "./Components/ServicesBlock/Service";
import Best from "./Components/BestResults/Best";
import Newsletter from "./Components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return (
        <div className='container'>
            <Navbar/>
            <Block/>
            <Create/>
            <Logos/>
            <About/>
            <Service/>
            <Best/>
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default App;