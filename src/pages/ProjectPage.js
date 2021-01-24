import React from 'react'
import Hero from '../components/Hero'
import projectdata from '../data/projectdata'
import { Container, Row, Col, Card, Button, Image, Badge } from 'react-bootstrap'

const snackCard = {
  borderRadius : 20,
}
const smallTextFontSpace = {
  letterSpacing: '2px',
}
const ratingFont = {
  fontSize : '1rem',
}

function ProjectPage(props) {
    const projectdatas = projectdata

    console.log(projectdatas);
    console.log(projectdatas.projects.imageLink);

    return (
        <Container fluid={true} className='px-3'>
            <Hero title={props.title} />
                {
                    projectdatas.projects.map((data) => {return(
                        <Card className="p-3 mx-2 shadow border-0 mb-3" style={snackCard} key={data.id}> 
                        <Row className="">

                        <Col xs={12} sm={12} md={12} lg={6} className=''> 
                            <h1 className="display-4">{data.name}</h1> 
                            <Image src={data.imageLink} alt="walk-through" style={{width : '100%'}} fluid rounded />
                        </Col> 

                        <Col xs={12} sm={12} md={12} lg={6} className=''> 
                            <h1 className="display-4 font-weight-lighter">Tech Stack</h1> 
                            <hr />
                            <Row className="font-weight-bolder" style={smallTextFontSpace}>
                                <Col>
                                {
                                    data.details.map((detailItem) =>{return(
                                        <p>
                                        <Badge variant="primary" style={ratingFont} className="ml-auto mr-3 p-3"> > </Badge>
                                        {detailItem}
                                        </p>
                                    )})
                                }
                                </Col>
                            </Row>  
                            <a href={data.gitHubLink}>Github Link</a>
                        </Col> 
                        
                        </Row>
                        </Card>
                    );
                    })
                }
        </Container>
    )
}

export default ProjectPage
