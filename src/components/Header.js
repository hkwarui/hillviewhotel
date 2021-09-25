import React from 'react'
import { Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import {Navbar, Nav, Container, NavDropdown, Col} from 'react-bootstrap'


import logo from '../resources/images/logo.png'

const Header = () => {


  return (
    <header >
<Navbar className="header navbar navbar-dark">
  <Container>
  <LinkContainer to='/'>
    <Navbar.Brand > <img src={logo} width="100" height="100" fluid /></Navbar.Brand>
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

    <span className="navbar-text">
    <i class="far fa-star"></i> <i class="far fa-star"></i> <i class="far fa-star"></i> <i class="far fa-star"></i> <i class="far fa-star"></i>
            A Five Star Hotel
            <i class="far fa-star"></i> <i class="far fa-star"></i> <i class="far fa-star"></i> <i class="far fa-star"></i> <i class="far fa-star"></i>
    </span>

  </Container>
</Navbar>

{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar w/ text</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
    <span class="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav> */}

    </header>
  )
}

export default Header
