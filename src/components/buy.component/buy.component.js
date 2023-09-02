import React from 'react';
import phoneGuy from '../../assets/Group_16.png';
import './buy.style.scss';

export const Buy = () => {
  return (
    <div id="product" className='buy-section-container'>
            <div className='buy-section-text-container'>
              <h3 className='buy-section-text-h3'>#count on us</h3>
              <h1 className='buy-section-text-h1'>Simple, fast and your way.</h1>
              <p>Show your brand values and how it can be part of the life of the user who is reading. Generating identification is the key to <span className='buy-section-span'>winning over your client.</span></p>
              <button className='buy-button'>Buy Now!</button>
            </div>
            <div className='buy-section-img-container'>
              <img src={phoneGuy} alt='' />
            </div>
          </div>
  )
}

export default Buy
