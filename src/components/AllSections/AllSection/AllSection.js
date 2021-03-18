import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import TitleMessage from '../../TitleMessage/TitleMessage';
import AboutMe from '../AboutMe/AboutMe';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Project from '../Projects/Project';
import Skills from '../Skills/Skills';
import './AllSection.css'

const AllSection = () => {
    return (
        <div className="all__sections">
            <AboutMe />
            <Skills />
            <Experience />
            <Project />
            <Blogs />
            <Contact />
            <Footer />
        </div>
    );
};

export default AllSection;