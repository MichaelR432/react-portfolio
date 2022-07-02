import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className="brand" href="/">
            MARS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="navLink" href="#about">
                ABOUT ME
              </Nav.Link>
              <Nav.Link className="navLink" href="#work">
                MY WORK
              </Nav.Link>
              <Nav.Link className="navLink" href="#contact">
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
