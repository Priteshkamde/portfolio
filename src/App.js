// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'

import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProjectPage from './pages/ProjectPage'

class App extends Component {
    constructor(props) {
    super(props)

    this.state = {
      headerLinks: [
        {title: 'Home', path:'/'},
        {title: 'About', path:'/about'},
        {title: 'Contact', path:'/contact'}
      ],

      home : {
        title : 'Be Impeccable',
        // title : Phenomenal, Evocative
        subTitle : 'Arts that make a Difference',
        text : 'Checkout below' 
      },
      about : {
        title : 'About Me'
      },
      contact : {
        title : 'Let\'s Talk',
      },
      projects : {
        title : 'Projects',
      },

    }
  }

  render() {
    return (
      <Router>
      <Container className="p-0" fluid={true}>

        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand className="font-weight-bolder">Pritesh K</Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto">
            <Link className="nav-link font-weight-bold font-bolder-hover" to="/portfolio"> Home </Link>
            <Link className="nav-link font-weight-bold font-bolder-hover" to="/about"> About</Link>
            <Link className="nav-link font-weight-bold font-bolder-hover" to="/projects"> Projects </Link>
            <Link className="nav-link font-weight-bold font-bolder-hover" to="/contact"> Contact </Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* <h1 className="display-1">Hi Pk</h1> */}

        <Route path="/" exact render={
          () => <HomePage 
                  title={this.state.home.title}
                  subTitle={this.state.home.subTitle}   
                  text={this.state.home.text} 
                  />
          }/>

        <Route path="/portfolio" exact render={
          () => <HomePage 
                  title={this.state.home.title}
                  subTitle={this.state.home.subTitle}   
                  text={this.state.home.text} 
                  />
          }/>

          <Route path="/about" render={
          () => <AboutPage 
                  title={this.state.about.title}
                 />
          }/>
          
          <Route path="/contact" render={
          () => <ContactPage 
                  title={this.state.contact.title}
                 />
          }/>

          <Route path="/projects" render={
            () => <ProjectPage 
                    title={this.state.projects.title}
                  />
          }/>

        <Footer />

      </Container>
      </Router>
    );
  }
}


export default App;
