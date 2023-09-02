import React from "react";
import { useState } from "react";
import PopUp from "../popup.component/popup.component";
import menuIcon from '../../assets/Vector.png';
import logo from '../../assets/logo.png';
import fbLogo from '../../assets/fb-logo.png';
import instaLogo from '../../assets/instagram.png';
import './nav.style.scss'


const Navigation = () => {

    const[buttonPopUp, setButtonPopUp] = useState(false);

    return(
        <div className='naviagtion-container'>
                <img className='naviagtion-img' src={menuIcon} alt="" onClick={() => setButtonPopUp(true)} />
                <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                  <a href="#about" className='navigation-ancor' onClick={() => setButtonPopUp(false)}>About</a>
                  <a href="#product" className='navigation-ancor' onClick={() => setButtonPopUp(false)}>Product</a>
                  <a href="#contactUs" className='navigation-ancor' onClick={() => setButtonPopUp(false)}>Contact Us</a>
                </PopUp>
                <img className='logo' src={logo} alt=''/>
                <div className='navigation-links'>
                  <a href="#about" className='navigation-link'>About</a>
                  <a href="#product" className='navigation-link'>Product</a>
                  <a href="#contactUs" className='navigation-link'>Contact Us</a>
              </div>
                <div className='social-media-logos'>
                  <img className='insta-img' src={instaLogo} alt=''/>
                  <img className='fb-img' src={fbLogo} alt=""/>           
                </div>
          </div>
    )
}

export default Navigation;