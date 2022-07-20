import React from 'react'
import {Nav,Navbar,Container,Button} from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from '../images/logo.png'
import Services from './Services'
import Members from './Members'
import BeMembers from './BeMember'
import Login from './Login'
import Home from './Home'

function Navbars() {
  return (
    <>
    <Container >
      <Router>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
            <img
              src={logo}
              width="90"
              height="90"
              style={{borderRadius: "50%"}}
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
            <Nav.Link href="/Members">Members</Nav.Link>
            <Nav.Link href="/BeMembers">Be Member</Nav.Link>
          </Nav>
          <Button variant="secondary">Register</Button>{''}
          <h1> | </h1>
          <Button href="/Login" variant="warning">Login</Button>{' '}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/Services"  element={<Services />}></Route>
          <Route path="/Members"  element={<Members />}></Route>
          <Route path="/BeMembers"  element={<BeMembers />}></Route>
          <Route path="/Login"  element={<Login />}></Route>
        </Routes>
    </Router>
    </Container>
    </>
  )
}

export default Navbars