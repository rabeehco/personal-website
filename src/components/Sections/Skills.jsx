import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';


import classes from './Skills.module.css'

function Skills() {
    // const html = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'
    // const css = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'
    // const js = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
    // const react = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'
    // const node = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg'
    // const express = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg'
    // const mongodb = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg'
    // const bootstrap = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg'
    // const firebase = 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg'

    // const postman = 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg'
    // const git = 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
    // const figma = 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg'
    // const heroku = 'https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg'

    return (
        <Container fluid id='skills'>
            <Row className={`${classes.main} pt-5`}>
                <Col className={`${classes.skills}`}>
                    <h2 className='ms-3 ms-sm-5 fw-bold'>Skills</h2>

                    <Row className='d-flex flex-column flex-sm-row'>
                        <Col className='d-flex flex-column justify-content-start align-items-start ps-sm-5 ps-3'>
                        <h4 className='ms-4 mt-4'>JavaScript</h4> 
                        <ProgressBar animated now={87} variant='warning' className='w-50 ms-5' />
                        <h4 className='ms-4 mt-4'>Node.Js</h4>
                        <ProgressBar animated now={70} variant='success' className='w-50 ms-5' />
                        <h4 className='ms-4 mt-4'>React.Js</h4>
                        <ProgressBar animated now={67} variant='primary' className='w-50 ms-5' />
                        </Col>
                        <Col className='d-flex flex-column justify-content-start align-items-start ps-sm-5 ps-3'>
                        <h4 className='ms-4 mt-4'>MongoDB</h4>
                        <ProgressBar animated now={69} variant='secondary' className='w-50 ms-5' />
                        <h4 className='ms-4 mt-4'>HTML/CSS</h4>
                        <ProgressBar animated now={70} variant='danger' className='w-50 ms-5' />
                        </Col>

                    </Row>
                </Col >

                <Col className={`mt-5 ${classes.skills}`}>
                    <h2 className='ms-sm-5 ms-3 fw-bold'>Achievements</h2>
                    <a href='https://www.holopin.io/@codewithrabeeh' target='_blank' rel='noreferrer'><img className={`${classes.holopin} mt-3 mb-3 ms-sm-5 ms-3`} src='https://www.holopin.me/codewithrabeeh' alt='holopin' /></a>
                    <a href='https://dev.to/rabeeh' target='_blank' rel='noreferrer'><img className={`${classes.mongohackathon} mt-1 mb-3 ms-sm-5 ms-3`} src='https://res.cloudinary.com/deuyeqft4/image/upload/v1672540550/Public/MongoDB_Atlas_Hackathon_2022_Participant_j8cxwa.png' alt='mongodb atlas hackathon' /></a>
                </Col>
            </Row>
        </Container>
    )
}

export default Skills