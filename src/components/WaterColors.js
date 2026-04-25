import React from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";
import yosemite from "../assets/squareartimages/inspired-by-yosemite.jpg";
import evening from "../assets/squareartimages/evening-at-highway.jpg";
import boats from "../assets/squareartimages/boats.jpg";
import cali from "../assets/squareartimages/california-sunset.jpg";

function WaterColors() {
  const cardStyle = {
    borderRadius: 10,
    objectFit: "cover",
    width: "100%",
    boxShadow: "0 0 15px 0 rgba(50, 50, 50, 0.2)",
  };

  const cardImageStyle = {
    objectFit: "cover",
    width: "100%",
    height: "50vh",
    borderRadius: 10,
    // height : 500,
    // width : '100%',
    backgroundSize: "contain",
  };

  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={12}>
            <h1 className="display-3 font-weight-bolder">
              Travel & Photography
            </h1>
            {/* <Button variant="primary font-weight-bold p-3">Learn more</Button> */}
            <hr />
          </Col>
        </Row>

        {/* <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>

                    </Col>
                </Row> */}

        <CardColumns className="px-2">
          {/* <Card style={cardStyle}>
                        <Card.Img style={cardImageStyle} variant="" src={aero_1} />
                        <Card.Body>
                        <Card.Title>View from Aeroplane</Card.Title>
                        </Card.Body>
                    </Card> */}

          {/* <Card style={cardStyle} className="p-3">
                        <blockquote className="blockquote mb-0 card-body text-center">
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
                    </Card> */}

          <Card style={cardStyle}>
            <Card.Img style={cardImageStyle} variant="top" src={yosemite} />
            <Card.Body>
              <Card.Title>Inspired by Yosemite</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>

          {/* <Card style={cardStyle} bg="" text="dark" className="text-center p-3">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Quote center ?
                        </p>
                        <footer className="blockquote-footer">
                            <small text="light">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                        </blockquote>
                    </Card> */}

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
            <Card.Img style={cardImageStyle} src={evening} />
            <blockquote className="blockquote mb-0 card-body">
              <p>Highway</p>
              {/* <footer className="blockquote-footer">
                            <small className="text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer> */}
            </blockquote>
          </Card>

          <Card style={cardStyle}>
            <Card.Img style={cardImageStyle} src={boats} />
            <blockquote className="blockquote mb-0 card-body">
              <p>Boats at Shoreline</p>
              {/* <footer className="blockquote-footer">
                            <small className="text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer> */}
            </blockquote>
          </Card>

          <Card style={cardStyle}>
            <Card.Img style={cardImageStyle} src={cali} />
            <blockquote className="blockquote mb-0 card-body">
              <p>California Sunset</p>
              {/* <footer className="blockquote-footer">
                            <small className="text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer> */}
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
  );
}

export default WaterColors;

// {
//     id : 5,
//     title : 'Inspired by Yosemite',
//     subTitle : 'Watercolor Art',
//     imgSrc : yosemite,
//     selected : false
// },
// {
//     id : 6,
//     title : 'Inspired by Yosemite',
//     subTitle : 'Watercolor Art',
//     imgSrc : cali,
//     selected : false
// },
// {
//     id : 7,
//     title : 'Inspired by Yosemite',
//     subTitle : 'Watercolor Art',
//     imgSrc : evening,
//     selected : false
// },
// {
//     id : 8,
//     title : 'Inspired by Yosemite',
//     subTitle : 'Watercolor Art',
//     imgSrc : boats,
//     selected : false
// },
