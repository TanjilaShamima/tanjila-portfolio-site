import React from 'react';
import { Button, Col, Jumbotron, Row } from 'react-bootstrap';
import './Contact.css'
import ContactForm from './ContactForm';

const ContactMe = () => {
    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            
            <Jumbotron className="contact-jumbotron">
            <ContactForm />
                <Row>
                <Col className="d-flex justify-content-center flex-wrap">
                    <div className="m-2">
                    <a href="mailto:tanjila.cse.diu@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-danger" title="tanjila.cse.diu@gmail.com">
                        <i className="fas fa-envelope-square"></i> Email Me
                        </Button>
                    </a>
                    </div>
                    <div className="m-2">
                    <a href="https://www.linkedin.com/in/tanjila-shamima-b932bb1a5/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-primary" title="Visit my LinkenIn">
                        <i className="fab fa-linkedin"></i> LinkedIn
                        </Button>
                    </a>
                    </div>
                    
                    <div className="m-2">
                    <a href="https://github.com/TanjilaShamima" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-dark" title="My other projects">
                        <i className="fab fa-github-square"></i> GitHub
                        </Button>
                    </a>
                    </div>
                    <div className="m-2">
                    <a href="https://www.youtube.com/channel/UCwSJajvbGJbAljw03ZVdUQw" target="_blank" rel="noopener noreferrer">
                        <Button id="youtube-btn" variant="outline-info" title="Lets code together!">
                        <i class="fab fa-youtube"></i> Youtube
                        </Button>
                    </a>
                    </div>
                    <div className="m-2">
                    <a href="https://twitter.com/shamima_tanjila" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-info" title="Tweets are welcomed!">
                        <i className="fab fa-twitter"></i> Twitter
                        </Button>
                    </a>
                    </div>
                    <div className="m-2">
                    <a href="https://www.facebook.com/nidrahin.shamima" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-primary" title="Say hello on FB">
                        <i className="fab fa-facebook-square"></i> FaceBook
                        </Button>
                    </a>
                    </div>
                </Col>
                </Row>
            </Jumbotron>
            </div>
    );
};

export default ContactMe;