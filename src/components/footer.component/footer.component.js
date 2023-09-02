import React from 'react';
import footerLogo from '../../assets/footerLogo.png';
import footerInstagram from '../../assets/footerInstagram.png';
import footerFacebook from '../../assets/footerFacebook.png';
import './footer.style.scss';

const Footer = () => {
  return (
    <div className='footer-container'>
    <div className='footer-top-container'>
      <div className='footer-logo-container'>
        <img src={footerLogo} alt='' />
      </div>
      <div className='footer-media-container'>
        <div className='footer-links-container'>
          <p>what we do</p>
          <p>how we help you</p>
          <p>contact us</p>
        </div>
        <div className='footer-media-logos-container'>
          <img src={footerInstagram} alt='' />
          <img src={footerFacebook} alt='' />
        </div>
      </div>
    </div>
    <div className='footer-bottom-container'>
        <div className='footer-email-container'>
          <p className='footer-p'>Receive news from nice</p>
          <div className='footer-input-box'>
           <input placeholder='name@email.com' />
           <button>Register</button>
          </div>                       
        </div>
        <div className='footer-copyright-container'>
          <div className='footer-line'></div>
          <p>Made with React and SCSS by stan.gabriel.remus@gmail.com - 2023</p>
        </div>
    </div>
</div>
  )
}

export default Footer;