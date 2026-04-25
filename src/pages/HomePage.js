import React from 'react'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import Travel from '../components/Travel'
import WaterColors from '../components/WaterColors'

function HomePage(props) {
    return (
        <div>
            <Hero 
            title={props.title} 
            subTitle={props.subTitle} 
            text={props.text} 
            />
            <Carousel />
            <WaterColors />
            <Travel />
            
        </div>
    )
}

export default HomePage
