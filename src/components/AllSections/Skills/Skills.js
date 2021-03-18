import React from 'react';
import { Container } from 'react-bootstrap';
import Slide from "react-reveal/Slide";
import MySkill from './MySkill';

const Skills = () => {
    return (
        <Container className="container-box rounded">
            <Slide bottom duration={500}>
                <hr />
                <MySkill />
                <hr/>
            </Slide>
      </Container>
    );
};

export default Skills;