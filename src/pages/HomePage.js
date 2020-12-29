import React from 'react'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import Travel from '../components/Travel'

function HomePage(props) {
    return (
        <div>
            <Hero 
            title={props.title} 
            subTitle={props.subTitle} 
            text={props.text} 
            />
            <Carousel />
            <Travel />
        </div>
    )
}

export default HomePage
