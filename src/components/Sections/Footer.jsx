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
                <Col className={`${classes.main}`}>
                <h6 className={`ps-5 mt-3 mb-3 fw-bold ${classes.footerTitle}`}>© 2022 Rabeeh Ebrahim. All Rights Reserved.</h6>
                <GitHubIcon className='me-3' />
                </Col>

            </Row>
        </Container>

  )
}

export default Footer