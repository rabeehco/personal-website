import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import classes from './Contact.module.css'

function Contact() {
    return (
        <Container fluid id='contact'>
            <Row className={`${classes.main} pt-5 pb-5`}>
                <Col className={`${classes.contactC1}`}>
                    <h2 className='ms-5 fw-bold'>Get in Touch.</h2>
                    <h5 className='ms-5 mt-3'><a href='mailto:rabeehebrahim48@gmail.com'>Rabeehebrahim48@gmail.com</a></h5>
                </Col>

                <Col>

                </Col>
                
                <Col className={`${classes.contactC2}`}>
                    <a href='https://drive.google.com/file/d/1r5pDw6UZyoUmKBuAV8ndWj6Rb6uY947G/view' target='_blank' rel='noreferrer' ><Button className={`mb-3 ${classes.resumeBtn}`}>Download Resume</Button></a>
                    <div className={`mt-5`}>
                        <h2>Connect</h2>
                        <h6>GitHub</h6>
                        <h6>LinkedIn</h6>
                        <h6>Twitter</h6>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact