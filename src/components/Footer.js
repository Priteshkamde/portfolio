import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


function Footer() {
    return (
        <div>
            <footer className="mt-5">
                <Container fluid={true} className="justify-content-end">

                    <Row className="border-top p-1">
                        <Col className="p-0 d-flex justify-content-end" >
                            This site was made by Pritesh
                        </Col>
                    </Row>

                    <Row className="p-3">
                        <Col className="p-0 d-flex justify-content-end">
                            <small>Last updated {new Date().toDateString()}</small>
                        </Col>
                    </Row>

                </Container>
            </footer>
        </div>
    )
}

export default Footer
