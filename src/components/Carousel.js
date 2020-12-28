import React, { Component } from 'react'
import Card from '../components/Card'

// import fox from '../assets/imgs/fox.jpg'
// import tomjerry from '../assets/imgs/tomjerry.jpg'
// import eye from '../assets/imgs/eye.jpg'
// import batman from '../assets/imgs/batman.jpg'

import fox from '../assets/squareartimages/fox.jpg'
import tomjerry from '../assets/squareartimages/tomjerry.jpg'
import eye from '../assets/squareartimages/eye.jpg'
import batman from '../assets/squareartimages/batman.jpg'
import scoobydoo from '../assets/squareartimages/scoobydoo.jpg'

import { Container, Row } from 'react-bootstrap'


export class Carousel extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items : [
                 {
                     id : 0,
                     title : 'Tom & Jerry',
                     subTitle : 'Art',
                     imgSrc : tomjerry,
                     selected : false
                 },
                 {
                     id : 1,
                     title : 'Batman',
                     subTitle : 'Art',
                     imgSrc : batman,
                     selected : false
                 },
                 {                     
                     id : 2,
                     title : 'Scooby Doo',
                     subTitle : 'Art',
                     imgSrc : scoobydoo,
                     selected : false
                },
                {                     
                     id : 3,
                     title : 'Fox',
                     subTitle : 'Art',
                     imgSrc : fox,
                     selected : false
                },
                {                     
                     id : 4,
                     title : 'Eye',
                     subTitle : 'Art',
                     imgSrc : eye,
                     selected : false
                },
             ]
        }
    }

    handleCardClick = (id, card) => {

        console.log(id);

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true ;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        }); 

        this.setState({
            items
        });

    }


    makeCards = (items) => {
        return items.map(item => {
            return <Card 
            item={item} 
            click={(e => this.handleCardClick(item.id, e))} 
            key={item.id} />
        })
    }
    

    render() {
        return (
            <div>
                <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeCards(this.state.items)}
                </Row>
                </Container>
            </div>
        );
    }
}

export default Carousel
