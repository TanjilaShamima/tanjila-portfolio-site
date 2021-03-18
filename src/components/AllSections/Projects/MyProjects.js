
import React from 'react';
import './Projects.css';
import {
    Timeline,
    Events,
    UrlButton,
    ImageEvent,
    TextEvent,
    YouTubeEvent,
  } from '@merc/react-timeline';
import { Accordion, Card, Image } from 'react-bootstrap';
import project1 from '../../../images/projects/project-1.png';
import project2 from '../../../images/projects/project2.png';
import project3 from '../../../images/projects/project3.png';
import project4 from '../../../images/projects/project4.png';
import project5 from '../../../images/projects/project5.png';
import project6 from '../../../images/projects/project6.png';
import project7 from '../../../images/projects/project7.png';
import project8 from '../../../images/projects/project8.png';
import project9 from '../../../images/projects/project9.png';

import L_REACT from "../../../images/skills/react.svg";
import L_NODE_JS from "../../../images/skills/nodejs.svg";
import L_EXPRESS from "../../../images/skills/express.svg";
import L_POSTGRESQL from "../../../images/skills/postgresql.svg";
import L_MONGODB from "../../../images/skills/mongodb.svg";
import L_REDUX from "../../../images/skills/redux.svg";
import L_HTML5 from "../../../images/skills/html-5.svg";
import L_CSS3 from "../../../images/skills/css3.svg";
import L_BOOTSTRAP4 from "../../../images/skills/bootstrap-4.svg";
import L_DJANGO from "../../../images/skills/django.svg";
import L_DIGITAL_OCEAN from "../../../images/skills/digital-ocean.svg";
import L_GIT from "../../../images/skills/github-api.svg";
import L_MATERIALUI from "../../../images/skills/material-ui-1.svg";

const MyProjects = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                {/* Project: Todo List With MUI */}
                <ImageEvent
                    date="10/01/2021"
                    className="text-center"
                    text="Smart Hospital Application"
                    src={project1}
                    alt="Smart Hospital Application"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>Description:</strong> This is a Hospital Management Application which is made by react and Node jS
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                <li>Patients can place their appointment with the doctor.</li>
                                <li>Doctor can review the appointment, reject the
                                appointment</li>
                                <li>Doctor can prescribe medicine to a particular patient.
                                </li>
                                </ul>
                                <hr />
                                <strong>Tech used:</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_HTML5}
                                        alt="HTML 5"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    HTML5
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_CSS3}
                                        alt="CSS 3"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    CSS3
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_REACT}
                                        alt="React"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    React
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_REACT}
                                        alt="React"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    Node JS
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_REACT}
                                        alt="React"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    Express JS
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_MATERIALUI}
                                        alt="Material-UI"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    React Bootstrap
                                    </span>
                                </li>
                                
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton
                        href="https://smart-hospital-application.web.app/"
                        target="_blank"
                        >
                        SEE LIVE
                        </UrlButton>
                        <UrlButton
                        href="https://github.com/TanjilaShamima/smart-hospital-management-application"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                        <UrlButton
                        href="#"
                        target="_blank"
                        >
                        WATCH VIDEO
                        </UrlButton>
                    </div>
                    </div>
                </ImageEvent>


        {/* Project: MERN Tip Calculator */}
        <ImageEvent
                    date="12/16/2020"
                    className="text-center"
                    text="Online Restaurant Application"
                    src={project2}
                    alt="Online Restaurant Application"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>Description:</strong> This is an Online Restaurant management System. Which is build by React
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                <li>Customers can order foods based on the given categories.</li>
                                <li>In order to order foods, customer must login to the app</li>
                                <li>In the authentication, firebase authentication is used</li>
                                </ul>
                                <hr />
                                <strong>Tech used:</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_REACT}
                                        alt="React"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    React
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_NODE_JS}
                                        alt="Node.js"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    Node.js
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_EXPRESS}
                                        alt="Express"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    Express
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_MONGODB}
                                        alt="MongoDB"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    MongoDB
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_MATERIALUI}
                                        alt="Material-UI"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    Material-UI
                                    </span>
                                </li>
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton
                        href="https://onion-restaurent.web.app/"
                        target="_blank"
                        >
                        SEE LIVE
                        </UrlButton>
                        <UrlButton
                        href="https://github.com/TanjilaShamima/hot-onion-restaurent"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                        <UrlButton
                        href=""
                        target="_blank"
                        >
                        WATCH VIDEO
                        </UrlButton>
                    </div>
                    </div>
                </ImageEvent>

                {/* Project: Get GitHub Info */}
                <ImageEvent
                    date="20/12/2020"
                    className="text-center"
                    text="Creative Agency"
                    src={project3}
                    alt="Creative Agency"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>Description:</strong> This is a Creative Agency Website. 
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                <li>Search any Github profile</li>
                                <li>Real-time API calls</li>
                                </ul>
                                <hr />
                                <strong>Tech used:</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_HTML5}
                                        alt="HTML 5"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    HTML5
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_CSS3}
                                        alt="CSS 3"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    CSS3
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_REACT}
                                        alt="React"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    React
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_GIT}
                                        alt="Github API"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    GitHub API
                                    </span>
                                </li>
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton
                        href="https://creative-agency-e22a7.web.app/"
                        target="_blank"
                        >
                        SEE LIVE
                        </UrlButton>
                        <UrlButton
                        href="https://github.com/TanjilaShamima/creativeAgencyClient"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                        <UrlButton
                        href="https://creative-agency-e22a7.web.app/"
                        target="_blank"
                        >
                        WATCH VIDEO
                        </UrlButton>
                    </div>
                    </div>
                </ImageEvent>

                {/* Project: Smart Brain */}
                <ImageEvent
                    date="15/11/2020"
                    className="text-center"
                    text="Volunteer Network"
                    src={project4}
                    alt="Volunteer Network"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>Description:</strong> An app that detects face
                                in a picture.
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                <li>Register new user</li>
                                <li>Signin exiting user</li>
                                <li>Keep tracks of entries for each user</li>
                                </ul>
                                <hr />
                                <strong>Tech used:</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_REACT}
                                        alt="React"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    React
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_NODE_JS}
                                        alt="Node.js"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    Node.js
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_EXPRESS}
                                        alt="Express"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    Express
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_POSTGRESQL}
                                        alt="PostgreSQL"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    PostgreSQL
                                    </span>
                                </li>
                                </ul>
                                <hr />
                                <em>
                                <strong>SignUp/ Signin:</strong>
                                <br />
                                <br />
                                You can <strong>register</strong> as new user or{" "}
                                <strong>log in</strong> using the demo account below.
                                <br />
                                <br />
                                <strong>Demo Account Details:</strong>
                                <br />
                                email: demo@demo.com
                                <br />
                                password: demo
                                </em>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton
                        href="https://volunteer-network-f167d.firebaseapp.com/"
                        target="_blank"
                        >
                        SEE LIVE
                        </UrlButton>
                        <UrlButton
                        href="https://github.com/TanjilaShamima/volunteer-network-client"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                        <UrlButton
                        href="https://volunteer-network-f167d.firebaseapp.com/"
                        target="_blank"
                        >
                        WATCH VIDEO
                        </UrlButton>
                    </div>
                    </div>
                </ImageEvent>

                {/* Project: RoboFriends */}

                <ImageEvent
                    date="05/11/2020"
                    className="text-center"
                    text="Travel Guru"
                    src={project5}
                    alt="Travel Guru"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>Description:</strong> An app that allows to
                                search through robots fetched in real-time with users.
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                <li>Search through Robots</li>
                                <li>Users and Robots being fetched via API call</li>
                                <li>Usage of Redux store</li>
                                </ul>
                                <hr />
                                <strong>Tech used:</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_HTML5}
                                        alt="HTML 5"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    HTML5
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_CSS3}
                                        alt="CSS 3"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    CSS3
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_BOOTSTRAP4}
                                        alt="Bootstrap 4"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    Bootstrap 4
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_REACT}
                                        alt="React"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    React
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_REDUX}
                                        alt="Redux"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    Redux
                                    </span>
                                </li>
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton
                        href="https://travel-guru-73b71.firebaseapp.com/"
                        target="_blank"
                        >
                        SEE LIVE
                        </UrlButton>
                        <UrlButton
                        href="https://github.com/TanjilaShamima/new-travel-guru"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                    </div>
                    </div>
                </ImageEvent>

                {/* Project: Product_Hunt_Clone */}

                <ImageEvent
                    date="15/10/2020"
                    className="text-center"
                    text="Online Course"
                    src={project6}
                    alt="Online Course"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>Description:</strong> This website is a clone of
                                Product Hunt built using Django.
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                <li>Register as new user</li>
                                <li>Signin as existing user</li>
                                <li>Raise a Product for people to see and Vote</li>
                                <li>Delete a product</li>
                                <li>Like and Dislike a product</li>
                                <li>Fully funtional Administration panel</li>
                                </ul>
                                <hr />
                                <strong>Tech used:</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_HTML5}
                                        alt="HTML 5"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    HTML5
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_CSS3}
                                        alt="CSS 3"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    CSS3
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_BOOTSTRAP4}
                                        alt="Bootstrap 4"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    Bootstrap 4
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_DJANGO}
                                        alt="Django"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    Django
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_POSTGRESQL}
                                        alt="PostgreSQL"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    PostgreSQL
                                    </span>
                                </li>
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton
                        href="https://github.com/TanjilaShamima/online-course"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                        <UrlButton
                        href="https://pedantic-lichterman-e530f4.netlify.app/"
                        target="_blank"
                        >
                        SEE LIVE
                        </UrlButton>
                    </div>
                    </div>
                </ImageEvent>

                {/* Project: Portfolio using Django */}
                <ImageEvent
                    date="07/10/2020"
                    className="text-center"
                    text="Hot Gadget"
                    src={project7}
                    alt="Hot Gadget"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>Description:</strong> This is my first portfolio
                                website built using Django.
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                <li>Send emails</li>
                                <li>View my projects</li>
                                <li>Write a blog</li>
                                <li>
                                    Hosted using Digital ocean under www.akjfun.com
                                </li>
                                <li>Fully funtional Administration panel</li>
                                </ul>
                                <hr />
                                <strong>Tech used:</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_HTML5}
                                        alt="HTML 5"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    HTML5
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_CSS3}
                                        alt="CSS 3"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    CSS3
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_BOOTSTRAP4}
                                        alt="Bootstrap 4"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    Bootstrap 4
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_DJANGO}
                                        alt="Django"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    Django
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_POSTGRESQL}
                                        alt="PostgreSQL"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    PostgreSQL
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_DIGITAL_OCEAN}
                                        alt="Digital Ocean"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    Digital-Ocean
                                    </span>
                                </li>
                                </ul>
                                <hr />
                                <em>
                                <strong>View Demo Video:</strong>
                                <br />
                                <br />
                                If you are reading this, that means I have updated my
                                Portfolio website to recent one.
                                <br />
                                You can still see a video of my old portfolio by
                                clicking on the button below.
                                <br />
                                <br />
                                </em>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton href="https://github.com/TanjilaShamima/hot-gadget" target="_blank">
                        SOURCE CODE
                        </UrlButton>

                        <UrlButton href="https://tanjilashamima.github.io/hot-gadget/" target="_blank">
                        LIVE SITE
                        </UrlButton>
                    </div>
                    </div>
                </ImageEvent>


                <ImageEvent
                    date="03/09/2020"
                    className="text-center"
                    text="Panda Ecommerce"
                    src={project8}
                    alt="Panda Ecommerce"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>Description:</strong> This is an Online Restaurant management System. Which is build by React
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                <li>Customers can order foods based on the given categories.</li>
                                <li>In order to order foods, customer must login to the app</li>
                                <li>In the authentication, firebase authentication is used</li>
                                </ul>
                                <hr />
                                <strong>Tech used:</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_REACT}
                                        alt="React"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    React
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_NODE_JS}
                                        alt="Node.js"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    Node.js
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_EXPRESS}
                                        alt="Express"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    Express
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_MONGODB}
                                        alt="MongoDB"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    MongoDB
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_MATERIALUI}
                                        alt="Material-UI"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    Material-UI
                                    </span>
                                </li>
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton
                        href="https://tanjilashamima.github.io/panda-ecommerce/"
                        target="_blank"
                        >
                        SEE LIVE
                        </UrlButton>
                        <UrlButton
                        href="https://github.com/TanjilaShamima/panda-ecommerce"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                        <UrlButton
                        href="https://tanjilashamima.github.io/panda-ecommerce/"
                        target="_blank"
                        >
                        WATCH VIDEO
                        </UrlButton>
                    </div>
                    </div>
                </ImageEvent>
                <ImageEvent
                    date="15/09/2020"
                    className="text-center"
                    text="Ema John"
                    src={project9}
                    alt="Ema John"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>Description:</strong> This is an Online Restaurant management System. Which is build by React
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                <li>Customers can order foods based on the given categories.</li>
                                <li>In order to order foods, customer must login to the app</li>
                                <li>In the authentication, firebase authentication is used</li>
                                </ul>
                                <hr />
                                <strong>Tech used:</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_REACT}
                                        alt="React"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    React
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_NODE_JS}
                                        alt="Node.js"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    Node.js
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_EXPRESS}
                                        alt="Express"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    Express
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_MONGODB}
                                        alt="MongoDB"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    MongoDB
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_MATERIALUI}
                                        alt="Material-UI"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    Material-UI
                                    </span>
                                </li>
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton
                        href="https://vibrant-villani-5c0ad5.netlify.app/"
                        target="_blank"
                        >
                        SEE LIVE
                        </UrlButton>
                        <UrlButton
                        href="https://github.com/TanjilaShamima/ema-john-simple-site"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                        <UrlButton
                        href="https://vibrant-villani-5c0ad5.netlify.app/"
                        target="_blank"
                        >
                        WATCH VIDEO
                        </UrlButton>
                    </div>
                    </div>
                </ImageEvent>
                </Events>
            </Timeline>
            </div>
    );
};

export default MyProjects;