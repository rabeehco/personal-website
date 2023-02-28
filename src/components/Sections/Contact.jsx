import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import classes from './Contact.module.css'

function Contact() {
    return (
        <Container fluid id='contact'>
            <Row className={`${classes.main} pt-5 pb-5 flex-sm-row flex-column`}>
                <Col className={`${classes.contactC1}`}>
                    <h2 className='ms-4 fw-bold'>Get&nbsp;in&nbsp;Touch.</h2>
                    <h5 className='ms-4 mt-3'><a href='mailto:rabeehebrahim48@gmail.com'>Rabeehebrahim48@gmail.com</a></h5>
                </Col>

                <Col>

                </Col>
                
                <Col className={`${classes.contactC2} ps-5 mt-sm-0 mt-5`}>
                    <a href='https://drive.google.com/file/d/17YpJRe4mIuxEKTX3DiQdl6kc6oF7gbUN/view' target='_blank' rel='noreferrer' ><Button className={`mb-3 ${classes.resumeBtn}`}>Download&nbsp;Resume</Button></a>
                    <div className={`mt-5 ${classes.connectTexts}`}>
                        <h2>Connect</h2>
                        <h6><a href='https://www.github.com/codewithrabeeh' target='_blank' rel="noreferrer">GitHub</a></h6>
                        <h6><a href='https://www.linkedin.com/in/rabeehebrahim/' target='_blank' rel="noreferrer">LinkedIn</a></h6>
                        <h6><a href='https://www.rabeeh.tech' target='_blank' rel="noreferrer">Blog</a></h6>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact
