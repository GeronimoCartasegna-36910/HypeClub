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
                    <Navbar.Brand className="brand" href="#inicio">Hype<span className="brand-span">Club</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex justify-content-center">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#Productos">Productos</Nav.Link>
                        <Nav.Link href="#Link">Sobre Nosotros</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>  
            </div>
        )
    }
}