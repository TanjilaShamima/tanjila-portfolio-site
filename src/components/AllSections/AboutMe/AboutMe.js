import React from 'react';
import { Container } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import AboutMeDetails from './AboutMeDetails';
import Fade from "react-reveal/Fade";

// ../../../images/parallex/background.webp

const AboutMe = () => {
    return (
        <div>
            <Parallax
            blur={{ min: -30, max: 30 }}
            bgImage="https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg"
            bgImageAlt=""
            strength={-200}
            >
            <div>
                <Container className="container-box rounded">
                <Fade duration={500}>
                    <AboutMeDetails />
                </Fade>
                </Container>
            </div>
            </Parallax>
        </div>
    );
};

export default AboutMe;