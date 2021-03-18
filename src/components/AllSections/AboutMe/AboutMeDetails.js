import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import './AboutMe.css';
import profile from '../../../images/profile.jpg'

const AboutMeDetails = () => {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3 mt-4">ABOUT ME</h1>
                <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    <Col xs={12} md={6}>
                    <Row className="justify-content-center mb-2 mr-2 ">
                        <Image className="profile justify-content-end" alt="profile" src={profile} thumbnail fluid />
                    </Row>
                    </Col>
                    <Col xs={12} md={6}>
                    <Row className=" align-items-start p-2 my-details rounded">
                        Hi Dear ! I am <strong>&nbsp;Tanjila Shamima</strong>
                        <br />A dedicated and hardworking individual with a Bachelor's degree in Computer Science and work experience of 3 years. Being well aware of the challenges and demands of this ever-evolving sector, I am offering my efficient and diligent services to fulfill the requirements of the IT industry. I aim at keeping myself up-to-date with the on-going developments in this field. Therefore, through my growing knowledge as well as sharp focus, I intend to successfully achieve my career goals. Expert in React.js, Node.js, Express, MongoDB, Firebase, Redux.
                        <br />
                        I completed my Bachelor of Science in Computer Science & Engineering at Daffodil International University.
                        <br />
                        Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                        <br />
                        <br /> <br />
                        <Col className="d-flex justify-content-center flex-wrap">
                        <div>
                            <a href="#contact">
                            <Button className="m-2" variant="outline-primary">
                                Let's talk
                            </Button>
                            </a>
                        </div>
                        <div>
                            <a href="https://drive.google.com/file/d/1BjxtJymMJUY3Uk2JOOvvhRGDsXuRpNAG/view?usp=sharing">
                            <Button className="m-2" variant="outline-success">
                                My Resume
                            </Button>
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/TanjilaShamima" target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-dark">
                                GitHub
                            </Button>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/tanjila-shamima-b932bb1a5/" target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-info">
                                LinkedIn
                            </Button>
                            </a>
                        </div>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
    );
};

export default AboutMeDetails;