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
                    <h2 className='ms-5 fw-bold'>About Me</h2>
                    <p className='mt-4 ms-5'>I am Rabeeh Ebrahim, a self-taught full-stack web developer who uses React, Node, Express, and MongoDB to develop powerful websites. I have done my diploma in Travel and Tourism and worked for a few years. Coding was one of my hobbies back then. Now I am a Web developer who messes around with codes. Love to contribute to open source and build things that will be helpful for humanity. I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand.</p>
                </Col>
            </Row>
        </Container>
  )
}

export default About