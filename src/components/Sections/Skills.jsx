import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import classes from './Skills.module.css'

function Skills() {
    const html = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'
    const css = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'
    const js = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
    const react = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'
    const node = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg'
    const express = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg'
    const mongodb = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg'
    const bootstrap = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg'
    const firebase = 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg'

    const postman = 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg'
    const git = 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
    const figma = 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg'
    const heroku = 'https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg'

    return (
        <Container fluid id='skills'>
            <Row className={`${classes.main} pt-5`}>
                <Col className={`${classes.skills}`}>
                    <h2 className='ms-5 fw-bold'>Skills</h2>
                    <p className='mt-4 ms-5'>Proficient:</p>
                    <div className={`${classes.logos} ms-5 w-50`}>
                        <img src={js} alt='JavaScript Logo'></img>
                        <img src={react} alt='Reactjs Logo'></img>
                        <img src={node} alt='Nodejs Logo'></img>
                        <img src={express} alt='Expressjs Logo'></img>
                        <img src={mongodb} alt='MongoDB Logo'></img>
                        <img src={firebase} alt='Firebase Logo'></img>
                        <img src={html} alt='HTML Logo'></img>
                        <img src={css} alt='CSS Logo'></img>
                        <img src={bootstrap} alt='Bootstrap Logo'></img>
                    </div>
                    <p className='mt-4 ms-5'>Tools:</p>
                    <div className={`${classes.logos} ms-5 w-25`}>
                        <img src={git} alt='GIT Logo'></img>
                        <img src={postman} alt='Postman Logo'></img>
                        <img src={figma} alt='Figma Logo'></img>
                        <img src={heroku} alt='Heroku Logo'></img> 

                    </div>
                </Col >

                <Col className={`mt-5 ${classes.skills}`}>
                    <h2 className='ms-5 fw-bold'>Achievements</h2>
                    <img className={`${classes.holopin} mt-3 mb-5 ms-5`} src='https://www.holopin.me/codewithrabeeh' alt='holopin' />
                </Col>
            </Row>
        </Container>
    )
}

export default Skills