import React from 'react';
import './BestResults.scss'
import Bounce from 'react-reveal/Fade';

const Best = () => {
    return (
        <Bounce left cascade>
            <div className='results'>
                <h1>Our best results for the year</h1>
                <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.</p>

                <div className="results-cards">
                    <div className="result-card">
                        <h2>57.6 bn</h2>
                        <p>LOAN PORTFOLIO</p>
                    </div>
                    <div className="result-card">
                        <h2>0.95%</h2>
                        <p>CLASSIFIED LOAN PORTFOLIO</p>
                    </div>
                    <div className="result-card">
                        <h2>388.5%</h2>
                        <p>CLASSIFIED LOAN Coverage</p>
                    </div>
                    <div className="result-card">
                        <h2>50.4 bn</h2>
                        <p>Deposit</p>
                    </div>
                    <div className="result-card">
                        <h2>6.1 bn</h2>
                        <p>Shareholders equity</p>
                    </div>
                    <div className="result-card">
                        <h2>18.51%</h2>
                        <p>Capital Adequacy Ratio</p>
                    </div>
                    <div className="result-card">
                        <h2>8.5 bn</h2>
                        <p>Market Capitalization</p>
                    </div>
                    <div className="result-card">
                        <h2>AAA</h2>
                        <p>Credit Rating</p>
                    </div>
                </div>
            </div>
        </Bounce>

    );
};

export default Best;