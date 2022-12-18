import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



function NavigationBar() {
    return (
        <Navbar bg="light" variant="light" fixed='top'>
            <Container className='d-flex justify-content-between'>
                <Navbar.Brand href="#home">Rabeeh Ebrahim</Navbar.Brand>
                <Nav>
                    <Nav.Link active href='#intro'>Intro</Nav.Link>
                    <Nav.Link href='#about' >About</Nav.Link>
                    <Nav.Link href='#skills' >Skills</Nav.Link>
                    <Nav.Link href='#work'>Works</Nav.Link>
                    <Nav.Link href='#contact'>Contact</Nav.Link>
                </Nav>
                <Nav className='d-flex justify-content-between' style={{width: '100px'}}>
                    <GitHubIcon />
                    <TwitterIcon />
                    <LinkedInIcon />
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar