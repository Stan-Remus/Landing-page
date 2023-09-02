import React from "react";
import manBurger from '../../assets/man-burger.png';
import gradientBlur from '../../assets/gradient-blur.png';
import './home.style.scss'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-text-container'>
              <h1 className='home-title'>A flashy nice tagline here.</h1>
              <p className='home-text'>A text about your product or service. Explain <span>why it is valuable</span> and direct the user to the next goal.</p>
              <div className='home-button-container'>
                <button className='buy-button'>Buy Now!</button>
                <button className='know-more-button'>Know more</button>
              </div>
            </div> 
            <div className='home-img-container'>
              <img className='gradient-blur' src={gradientBlur} alt='' />
              <img className='man-burger-img' src={manBurger} alt='' />
            </div>
          </div>
    )
}

export default Home;
