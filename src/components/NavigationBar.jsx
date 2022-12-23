import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import classes from './Navigation.module.css'

function NavigationBar() {
    return (
        <Navbar bg="light" variant="light" fixed='top'  expand='lg'>
            <Container >
                <Navbar.Brand href="#home">Rabeeh Ebrahim</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='w-100 ms-lg-5'>
                    <Nav.Link active href='#intro'>Intro</Nav.Link>
                    <Nav.Link href='#about' >About</Nav.Link>
                    <Nav.Link href='#skills' >Skills</Nav.Link>
                    <Nav.Link href='#work'>Works</Nav.Link>
                    <Nav.Link href='#contact'>Contact</Nav.Link>
                <div className={`mt-3 mt-lg-0 w-100 d-flex justify-content-lg-end justify-content-around align-items-center ${classes.icon}`} style={{width: '100px'}}>
                    <a href='https://github.com/codewithrabeeh' target='_blank' rel="noreferrer"><GitHubIcon /></a>
                    <a className='ms-0 ms-lg-3' href='https://twitter.com/rabeehebrahim_' target='_blank' rel="noreferrer"><TwitterIcon /></a>
                    <a className='ms-0 ms-lg-3' href='https://www.linkedin.com/in/rabeehebrahim/' target='_blank' rel="noreferrer"><LinkedInIcon /></a>
                </div>
                </Nav>
                </Navbar.Collapse> 
             
            </Container>
        </Navbar>
    )
}

export default NavigationBar