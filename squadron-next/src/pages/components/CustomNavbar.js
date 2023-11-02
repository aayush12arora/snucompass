import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import snuLogo from '../../assets/snu-logo-blue.webp';
import Image from 'next/image';

function CustomNavbar() {
    return (
        <Navbar bg="light" expand="lg" style={{marginBottom:'20px'}}>
            <Container>
                <Navbar.Brand href="#home">
                    <Image
                        src={snuLogo}
                        alt="SNU Logo"
                        width={100} // Set the width of the image
                        height={50} // Set the height of the image
                    />
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/MinorInfo">Minors</Nav.Link>
                        <Nav.Link href="/SignIn">Sign in</Nav.Link>
                        <Nav.Link href="/FacSignIn">Faculty Page</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
