import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Content(props) {
    
    const contentTextStyle = {
        fontSize : 25,
        color: "black",
    }

    return (
        <Container fluid={true}  style={contentTextStyle}>
            <Row className="justify-content-center">
                <Col md={8}>
                    {props.children}
                </Col> 
            </Row>
        </Container>
    )
}

export default Content
