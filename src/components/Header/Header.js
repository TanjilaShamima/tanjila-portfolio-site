import { Link } from '@material-ui/core';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <div className="header" style={{ width : '100%'}}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="light">
                <Container>
                    <Navbar.Brand><img style={{float: 'left'}}  width = "180px" height ="50px" src={logo} alt=""/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse className=" justify-content-end font-weight-bold" id="responsive-navbar-nav">
                  
                        <Nav className="ml-5">
                            <Nav.Link activeClass="active rounded cursor-pointer rounded" style={{textDecoration : 'none', cursor : 'pointer'}} className="mr-5 text-secondary" href="#home"> Home </Nav.Link>
                            <Nav.Link activeClass="active rounded cursor-pointer rounded" style={{textDecoration : 'none', cursor : 'pointer'}} className="mr-5 text-secondary" href="#about"> About Me </Nav.Link>                                           
                            <Nav.Link activeClass="active rounded cursor-pointer rounded" style={{textDecoration : 'none', cursor : 'pointer'}} className="mr-5 text-secondary" href="#skills"> Skills </Nav.Link>                                           <Nav.Link style={{textDecoration : 'none', cursor : 'pointer'}} href="#experience" className="mr-5 text-secondary">Experiences</Nav.Link>
                            <Nav.Link activeClass="active rounded cursor-pointer rounded" style={{textDecoration : 'none', cursor : 'pointer'}} className="mr-5 text-secondary" href="#projects"> Projects </Nav.Link> 
                            <Nav.Link style={{textDecoration : 'none', cursor : 'pointer'}} className="mr-5 text-secondary" href="#blogs">Blog</Nav.Link>                                          <Nav.Link style={{textDecoration : 'none', cursor : 'pointer'}} href="#contact" className="mr-5 text-secondary">Contact</Nav.Link>                           
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;