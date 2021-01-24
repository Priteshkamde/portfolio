import React from 'react'
import Hero from '../components/Hero'
import { Container, Row, Col, Button } from 'react-bootstrap'

function ContactPage(props) {
    return (
        <Container fluid={true}>
            <Hero title={props.title} />
            <Row className="justify-content-center">
                <Col md={8}>        
                        <a 
                            href="mailto:priteshrocks.pr@gmail.com?subject=Query&body=%3CText%20here%3E" 
                            target="_blank" 
                            rel="noopener noreferrer">
                        <Button className='p-4 font-bolder-hover' style={{letterSpacing : '2px'}}>Drop a mail > </Button>
                        </a>
                </Col> 
            </Row>
        </Container>
    )
}

export default ContactPage
