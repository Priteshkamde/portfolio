import React from 'react'
import { Jumbotron, Container, Row, Col, Button, Card, CardColumns } from 'react-bootstrap'
import aero_1 from '../assets/travelimages/aero_1.JPG'
import dubai_1 from '../assets/travelimages/dubai_1.JPG'
import owtc_1 from '../assets/travelimages/owtc_1.JPG'
import niagara from '../assets/travelimages/niagara.JPG'
import car_view from '../assets/travelimages/car_view.JPG'
import grandcentral from '../assets/travelimages/grandcentral.JPG'

function Travel() {
    const cardStyle = {
        borderRadius : 10,
    }
    const cardImageStyle = {
        objectFit: 'cover',
        width: '100%',
        height: '40vh',
        borderRadius : 10,
        // height : 500,
        // width : '100%',
        backgroundSize : 'contain',
    }

    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>

                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        <h1 className="display-3 font-weight-bolder">
                            Travel & Photography 
                        </h1>
                        <Button variant="primary font-weight-bold p-3">Learn more</Button>
                        <hr/>
                    </Col>
                </Row>

                {/* <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>

                    </Col>
                </Row> */}

                <CardColumns className="px-2">

                    <Card style={cardStyle}>
                        <Card.Img style={cardImageStyle} variant="" src={aero_1} />
                        <Card.Body>
                        <Card.Title>card 1</Card.Title>
                        </Card.Body>
                    </Card>

                    <Card style={cardStyle} className="p-3">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Quote 1
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in 
                            <cite title="Source Title">
                                Source Title
                            </cite>
                            </small>
                        </footer>
                        </blockquote>
                    </Card>

                    <Card style={cardStyle}>
                        <Card.Img style={cardImageStyle} variant="top" src={dubai_1} />
                        <Card.Body>
                        <Card.Title>dubai_1</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card bg="light" text="dark" className="text-center p-3">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                        </p>
                        <footer className="blockquote-footer">
                            <small text="light">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                        </blockquote>
                    </Card>

                    <Card style={cardStyle}>
                        <Card.Img style={cardImageStyle} src={car_view} />
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            car_view
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                        </blockquote>
                    </Card>

                    
                    <Card style={cardStyle}>
                        <Card.Img style={cardImageStyle} src={niagara} />
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            niagara
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                        </blockquote>
                    </Card>

                    <Card style={cardStyle}>
                        <Card.Img style={cardImageStyle} src={owtc_1} />
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            one wtc
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                        </blockquote>
                    </Card>

                    <Card style={cardStyle}>
                        <Card.Img style={cardImageStyle} src={grandcentral} />
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            grandcentral
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                        </blockquote>
                    </Card>

                    </CardColumns>

            </Container>
        </Jumbotron>
    )
}

export default Travel
