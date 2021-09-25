import React from 'react'
import { Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import {Navbar, Nav, Container, NavDropdown, Col} from 'react-bootstrap'


import logo from '../resources/images/logo.jpeg'

const Header = () => {


  return (
    <header>
<Navbar bg="light" expand="lg">
  <Container>
  <LinkContainer to='/'>
    <Navbar.Brand > <img src={logo} width="100" height="100" fluid /> </Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <LinkContainer to='/'>
        <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <NavDropdown title="Rooms" id="basic-nav-dropdown">
        <LinkContainer to='/roomlistview'>
          <NavDropdown.Item>Room List View</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to='/roomdetails'>
          <NavDropdown.Item>Room Details</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>

        <NavDropdown title="Blog" id="basic-nav-dropdown">
        <LinkContainer to='/bloggrid'>
          <NavDropdown.Item>Blog Grid</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to='/blogpost'>
          <NavDropdown.Item>Blog Post</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
        <LinkContainer to='/gallery'>
        <Nav.Link>Gallery</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}

export default Header
