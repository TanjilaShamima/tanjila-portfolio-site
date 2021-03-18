import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from "react-reveal/Fade";
import MyAllExperience from './MyAllExperience';

const Experience = () => {
    return (
        <div>
            <Container className="container-box rounded">
                <Fade duration={500}>
                    <MyAllExperience />
                </Fade>
                </Container>
        </div>
    );
};

export default Experience;