import React from 'react'
import Hero from '../components/Hero'
import Content from '../components/Content'

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Pritesh. 

            I'm a Software Engineer with experience in MongoDB, React JS & Spring Boot</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with APIs, MongoDB, React</p>

            <p>For My latest projects, you can checkout <a href="https://github.com/Priteshkamde" target="_blank" rel="noopener noreferrer">here</a>
            </p>

            <p>When I'm not learning something, chances are that I'm Sketching, Swimming or playing Squash :)</p>
            </Content>

        </div>
    )
}

export default AboutPage
