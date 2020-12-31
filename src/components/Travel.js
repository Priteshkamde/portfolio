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
        objectFit: 'cover',
        width: '100%',
        boxShadow: '0 0 15px 0 rgba(50, 50, 50, 0.2)',
    }

    const cardImageStyle = {
        objectFit: 'cover',
        width: '100%',
        height: '50vh',
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
                        <Card.Title>aero 1</Card.Title>
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
                        <Card.Title>dubai 1</Card.Title>
                        <Card.Text>
                            - 
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={cardStyle} bg="" text="dark" className="text-center p-3">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Quote 
                        </p>
                        <footer className="blockquote-footer">
                            <small text="light">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                        </blockquote>
                    </Card>

                    {/* <Card style={cardStyle}>
                        <Card.Img style={cardImageStyle} src={car_view} />
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            car view
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                        </blockquote>
                    </Card> */}

                    <Card style={cardStyle}>
                        <Card.Img style={cardImageStyle} src={car_view} />
                        {/* <blockquote className="blockquote mb-0 card-body">
                        <p>
                            car view
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                        </blockquote> */}
                        <Card.ImgOverlay className="h-100 d-flex flex-column justify-content-end">
                            <Card.Title className="text-light">Card title</Card.Title>
                            <Card.Text className="text-light">
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.ImgOverlay>
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
{/* 
                    <Card className="bg-dark text-white">
                    <Card.Img src={grandcentral} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title className="p-0">Card title</Card.Title>
                        <Card.Text className="p-0">
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                    </Card> */}

                    </CardColumns>

            </Container>
        </Jumbotron>
    )
}

export default Travel
