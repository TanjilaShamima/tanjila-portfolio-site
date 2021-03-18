import React from 'react';
import { Container } from 'react-bootstrap';
import MyProjects from './MyProjects';
import Fade from "react-reveal/Fade";

const Project = () => {
    return (
        <Container className="container-box rounded">
            {/* <Fade duration={500}> */}
                <hr />
                <MyProjects />
            {/* </Fade> */}
      </Container>
    );
};

export default Project;