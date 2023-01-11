import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GitHubIcon from '@mui/icons-material/GitHub';
import classes from './Footer.module.css'

function Footer() {
  return (
    <Container fluid id='work'>
            <Row>
                <Col className={`${classes.main} `}>
                <h6 className={`ps-1 ps-sm-3 mt-3 mb-3 fw-bold d-flex gap-2 ${classes.footerTitle}`}>© 2022 Rabeeh Ebrahim. <span className='d-none d-sm-block'>All Rights Reserved.</span></h6>
                <a href='https://github.com/codewithrabeeh/personal-website' target='_blank' rel="noreferrer"><GitHubIcon className='me-1 me-sm-3 text-white' /></a>
                </Col>

            </Row>
        </Container>

  )
}

export default Footer