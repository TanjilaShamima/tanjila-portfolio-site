import React from 'react';
import './TitleMessage.css';
import styled from "styled-components";
var ReactRotatingText = require('react-rotating-text');



const TitleMessage = () => {
    return (
        <div>
            <div className="title__message">
                <div className="titleMessage">
                <div className="heading">
                    <div className="main text-center ">
                    Hello, I am
                    <br />
                    <span>
                        <strong>Tanjila Shamima</strong>
                    </span>
                    </div>
                    <div className="sub">
                    {/* <Typewriter
                        options={{
                        strings: ["Web Developer", "Coach", "Learner"],
                        autoStart: true,
                        loop: true,
                        delay: 50
                        }}
                    /> */}
                    <ReactRotatingText style={{fontSize:'20px'}}  items={['Full Stack Web Engineer', 'MERN Stack', 'React Developer', 'Node JS Developer']} />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default TitleMessage;