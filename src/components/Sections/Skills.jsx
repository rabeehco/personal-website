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
                        
                        <img className='ms-4 mb-2 mt-4' src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white' alt='typescript'/>
                        <ProgressBar animated now={86} className={`w-50 ms-5 ${classes.typescript}`}/>   
                        
                        <img className='ms-4 mb-2 mt-4' src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' alt='javascript' />
                        <ProgressBar animated now={88} className={`w-50 ms-5 ${classes.javascript}`} />

                        <img className='ms-4 mb-2 mt-4' src='https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white' alt='nodejs'/>
                        <ProgressBar animated now={86} className={`w-50 ms-5 ${classes.nodejs}`} />

                        <img className='ms-4 mb-2 mt-4' src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' alt='react'/>
                        <ProgressBar animated now={88} className={`w-50 ms-5 ${classes.react}`} />
                        
                        </Col>

                        <Col className='d-flex flex-column justify-content-start align-items-start ps-sm-5 ps-3'>
                        
                        <img className='ms-4 mb-2 mt-4' src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white' alt='mongodb'/>
                        <ProgressBar animated now={87} className={`w-50 ms-5 ${classes.mongodb}`} />

                        <img className='ms-4 mb-2 mt-4' src='https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white' alt='postgresql'/>
                        <ProgressBar animated now={80} className={`w-50 ms-5 ${classes.postgresql}`} />

                        <img className='ms-4 mb-2 mt-4' src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' alt='html'/>
                        <ProgressBar animated now={89} className={`w-50 ms-5 ${classes.html}`} />

                        <img className='ms-4 mb-2 mt-4' src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' alt='css'/>
                        <ProgressBar animated now={90} className={`w-50 ms-5 ${classes.css}`} />                                                                      
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