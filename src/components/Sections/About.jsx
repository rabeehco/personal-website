import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import classes from './About.module.css'

function About() {
    return (
        <Container fluid id='about'>
            <Row className={`${classes.main} pt-5 pb-5`}>
                <Col className={`${classes.about}`}>
                    <h2 className='ms-3 ms-sm-5 fw-bold'>About Me</h2>
                    <p className='mt-4 ms-3 ms-sm-5'>Hi there! My name is Rabeeh Ebrahim and I am a self-taught full-stack web developer with a passion for building powerful websites using React, Node, Express, and MongoDB. I have always been interested in coding, and after completing my diploma in Travel and Tourism and working for a few years, I decided to pursue my passion for web development.</p>

                    <p className='mt-4 ms-3 ms-sm-5'>I love to contribute to open source projects and build things that are helpful for humanity. I enjoy taking on challenging work that allows me to learn new things and stretch my skills in different directions. As a lifelong learner, I make sure to stay up-to-date with the latest trends and technologies in the industry so that I can tackle any project with the right tools and techniques.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default About