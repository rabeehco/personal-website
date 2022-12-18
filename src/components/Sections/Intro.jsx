import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AnimatedText from 'react-animated-text-content';

import classes from './Intro.module.css'

function Intro() {
    return (
        <Container className={classes.main}>
            <Row style={{ height: '95vh' }} className="d-flex ">
                <Col className={`${classes.flexCenter}`}>
                    {/* <h1>Rabeeh</h1> */}
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
                    {/* <h1>Ebrahim</h1> */}
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
                    <img src='https://res.cloudinary.com/deuyeqft4/image/upload/v1671366417/Public/profile-pic_z7pesi.png' />
                </Col>
            </Row>
        </Container>
    )
}

export default Intro