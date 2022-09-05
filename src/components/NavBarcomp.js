import React, { Component } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class NavBarcomp extends Component {
    render() {
        return(
            <div>
              <Navbar bg="dark" variant={"dark"} expand="lg">
                <Container>
                    <Navbar.Brand href="#home">HypeClub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Productos</Nav.Link>
                        <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>  
            </div>
        )
    }
}