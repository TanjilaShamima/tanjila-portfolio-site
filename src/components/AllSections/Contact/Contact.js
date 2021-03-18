import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from "react-reveal/Fade";
import ContactForm from './ContactForm';
import ContactMe from './ContactMe';

const Contact = () => {
    return (
        <Container className="container-box rounded">
            <Fade duration={500}>
            <hr />
            <ContactMe />
            </Fade>
      </Container>
    );
};

export default Contact;