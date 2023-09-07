import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AnimatedText from 'react-animated-text-content';

import classes from './Intro.module.css'

function Intro() {
    return (
        <Container id='intro' className='mt-5'>
           {/*  */}  <Row style={{ minHeight: '100vh'}} className="d-flex flex-column-reverse flex-lg-row">
                <Col className={`${classes.flexCenter}`}>
                  
                    <AnimatedText
                        type='words'
                        interval={0.04}
                        duration={1.2}
                        animation={{
                            x: '100px',
                            ease: 'ease',
                        }}
                        className={`${classes.animatedFName} ps-1`}
                    >
                        Rabeeh
                    </AnimatedText>
                    
                   
                    <AnimatedText
                        type='words'
                        interval={0.04}
                        duration={1.2}
                        animation={{
                            x: '-100px',
                            ease: 'ease',
                        }}
                        className={`${classes.animatedLName} pe-1`}
                    >
                        Ebrahim
                    </AnimatedText>

                    <AnimatedText className={`${classes.animateParagraph} mb-5 mb-lg-0`}>Web Developer + Content Writer</AnimatedText>

                </Col>
                <Col className={`${classes.introImage}`}>
                    <img className='mt-lg-0 mt-5' src='https://res.cloudinary.com/deuyeqft4/image/upload/v1694095027/DSC06124_dmz94z.jpg' alt='Author'/>
                </Col>
            </Row>
        </Container>
    )
}

export default Intro