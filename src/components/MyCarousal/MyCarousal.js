import React from 'react';
import { Carousel } from 'react-bootstrap';
import Particles from 'react-particles-js';
import Slide1 from '../../images/carousal/slide2.webp';
// import Slide2 from '../../images/carousal/banner2.jpg';
import ScrollDown from '../ScrollDown/ScrollDown';
import './MyCarousal.css'

const MyCarousal = () => {
    return (
        <div id="home">
            <Carousel controls={false} indicators interval={2500} pause={false}>
                <Carousel.Item>
                <img className="d-block w-100 custom-img" src={Slide1} alt="First slide" />
                </Carousel.Item>
            </Carousel>
            {/* <ScrollDown /> */}
        </div>
    );
};

export default MyCarousal;