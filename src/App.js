import Particles from 'react-particles-js';
import './App.css';
import AboutMe from './components/AllSections/AboutMe/AboutMe';
import AllSection from './components/AllSections/AllSection/AllSection';
import MySkill from './components/AllSections/Skills/MySkill';
import Header from './components/Header/Header';
import MyCarousal from './components/MyCarousal/MyCarousal';
import TitleMessage from './components/TitleMessage/TitleMessage';
import Fade from "react-reveal/Fade";
import { Container } from 'react-bootstrap';
import Slide from "react-reveal/Slide";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import MyAllExperience from './components/AllSections/Experience/MyAllExperience';
import MyProjects from './components/AllSections/Projects/MyProjects';
import ContactForm from './components/AllSections/Contact/ContactForm';
import ContactMe from './components/AllSections/Contact/ContactMe';
import Blogs from './components/AllSections/Blogs/Blogs';
import { particlesOptions } from './ParticlesOption';

function App() {
  return (
    <div className="App" style={{ position: "relative" , backgroundColor: 'lightgray'}}>
      <Header />
      <MyCarousal />
      <TitleMessage />
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />     
      <AllSection />
  
    </div>
  );
}

export default App;
