import React from "react";
import coin from '../../assets/Ethereum_Coin.png';
import creditCard from '../../assets/Credit_Card.png';
import target from '../../assets/Target.png';
import plus from '../../assets/plus-circle.png';
import Carousel from "react-multi-carousel";
import './about.style.scss'

const About = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 1
        }
      };

    return(
        <div id="about" className='about-container'>
              <div className='about-main-text-container'>
                <h1 className='about-main-title'>A subtitle for those who scrolled this far!</h1>
                <p className='about-main-text'>Take advantage of this section to highlight the benefits of your product or service. Keywords help with SEO.</p>
              </div>
              <div className='carpusel-container'>
              <Carousel className='carousel2' responsive={responsive}>
                <div className='card2'>
                  <img className='target-img' src={target} alt='' />
                  <h1 className='about-card-h1'>Target</h1>
                  <p className='about-card-p'>Take advantage of this section to highlight the benefits of your product or service.</p>
                  <div className='about-plus-img'>
                    <img src={plus} alt='' />
                  </div>
                </div>
                <div className='card2'>
                  <img className='target-img' src={coin} alt='' />
                  <h1 className='about-card-h1 extra-margin'>Value</h1>
                  <p className='about-card-p extra-margin'>Take advantage of this section to highlight the benefits of your product or service.</p>
                  <div className='about-plus-img'>
                    <img src={plus} alt='' />
                  </div>
                </div>
                <div className='card2'>
                  <img className='target-img' src={creditCard} alt='' />
                  <h1 className='about-card-h1'>Speed</h1>
                  <p className='about-card-p'>Take advantage of this section to highlight the benefits of your product or service.</p>
                  <div className='about-plus-img'>
                    <img src={plus} alt='' />
                  </div>
                </div>
                
              </Carousel>
              </div>
          </div>
    )
}

export default About;