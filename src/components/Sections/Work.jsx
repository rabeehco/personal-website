import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import classes from './Work.module.css'

const firstProjectImage = 'https://user-images.githubusercontent.com/65481473/206892280-5850de5c-a73a-4419-bd43-f476ae1eaa8f.png'
const secondProjectImage = 'https://user-images.githubusercontent.com/65481473/208480145-12729fef-a161-47e5-931f-15a1500a7769.png'
const thirdProjectImage = 'https://res.cloudinary.com/deuyeqft4/image/upload/v1662011795/Public/netflixreact2_chiijh.png'
const fourthProjectImage = 'https://res.cloudinary.com/deuyeqft4/image/upload/v1664203516/Public/olx-react_f8ppkc.png'

function Work() {
    return (
        <Container fluid id='work'>
            <Row className={`${classes.main} pt-5 pb-5`}>
                <h2 className={`ps-5 fw-bold ${classes.projectTitle}`}>Projects</h2>
                <Row className='mt-5'>

                    {/* First Project */}
                    <Col className={`${classes.work}`}>
                        <Card className={`${classes.projectCard}`}>
                            <Card.Img variant="top" src={firstProjectImage} />
                            <Card.Body>
                                <Card.Title>Mom in Tech</Card.Title>
                                <Card.Text>
                                    A tech community for lone parents using MERN Stack.
                                </Card.Text>
                                <div>
                                    <a href='https://github.com/codewithrabeeh/mom_in_tech' target='_blank' rel='noreferrer'><Button variant="dark">GitHub</Button></a>
                                    <a href='https://momintech.netlify.app' target='_blank' rel='noreferrer'><Button variant="dark" className='ms-3'>Preview</Button></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Second Project */}
                    <Col className={`${classes.work}`}>
                        <Card className={`${classes.projectCard}`}>
                            <Card.Img variant="top" src={secondProjectImage} />
                            <Card.Body>
                                <Card.Title>Tripazo</Card.Title>
                                <Card.Text>
                                    Tripazo is a campground website built with Node.js.
                                </Card.Text>
                                <div>
                                    <a href='https://github.com/codewithrabeeh/Tripazo' target='_blank' rel='noreferrer'><Button variant="dark">GitHub</Button></a>
                                    <a href='https://tripazo.tk/' target='_blank' rel='noreferrer'><Button variant="dark" className='ms-3'>Preview</Button></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Third Project */}
                    <Col className={`${classes.work}`}>
                        <Card className={`${classes.projectCard}`}>
                            <Card.Img style={{height: '200px'}} variant="top" src={thirdProjectImage} />
                            <Card.Body>
                                <Card.Title>Netflix Clone</Card.Title>
                                <Card.Text>
                                    A clone of Netflix using React.js and TMDB API
                                </Card.Text>
                                <div>
                                    <a href='https://github.com/codewithrabeeh/React-Netflix' target='_blank' rel='noreferrer'><Button variant="dark">GitHub</Button></a>
                                    <a href='https://netflix-cwr.netlify.app/' target='_blank' rel='noreferrer'><Button variant="dark" className='ms-3'>Preview</Button></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Fourth Project */}
                    <Col className={`${classes.work}`}>
                        <Card className={`${classes.projectCard}`}>
                            <Card.Img variant="top" style={{height: '200px'}} src={fourthProjectImage} />
                            <Card.Body>
                                <Card.Title>OLX Clone</Card.Title>
                                <Card.Text>
                                    A clone of OLX using React.js and Firebase.
                                </Card.Text>
                                <div>
                                    <a href='https://github.com/codewithrabeeh/React-Olx' target='_blank' rel='noreferrer'><Button variant="dark">GitHub</Button></a>
                                    <a href='https://olx-cwr.netlify.app/' target='_blank' rel='noreferrer'><Button variant="dark" className='ms-3'>Preview</Button></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Row>
        </Container>
    )
}

export default Work