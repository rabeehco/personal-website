import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AnimatedText from 'react-animated-text-content';

import classes from './Intro.module.css'

function Intro() {
    return (
        <Container id='intro'>
            <Row style={{ minHeight: '120vh' }} className="d-flex ">
                <Col className={`${classes.flexCenter}`}>
                  
                    <AnimatedText
                        type='words'
                        interval={0.04}
                        duration={1.2}
                        animation={{
                            x: '100px',
                            ease: 'ease',
                        }}
                        className={classes.animatedFName}
                    >
                        Rabeeh
                    </AnimatedText>
                    <br />
                   
                    <AnimatedText
                        type='words'
                        interval={0.04}
                        duration={1.2}
                        animation={{
                            x: '-100px',
                            ease: 'ease',
                        }}
                        className={classes.animatedLName}
                    >
                        Ebrahim
                    </AnimatedText>

                    <AnimatedText className={classes.animateParagraph}>Web Developer + Content Writer</AnimatedText>

                </Col>
                <Col className={`${classes.introImage}`}>
                    <img src='https://res.cloudinary.com/deuyeqft4/image/upload/v1671366417/Public/profile-pic_z7pesi.png' alt='Author'/>
                </Col>
            </Row>
        </Container>
    )
}

export default Intro