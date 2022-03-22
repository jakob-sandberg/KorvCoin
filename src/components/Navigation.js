import React from "react";
//import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
import image from "../images/korv.png";
import "../style/Navbar.css";

const Navigation = () => {
  return (
    <Navbar className="navbar" expand="md">
      <Container>
        <Link
          className="navbarText"
          activeClass="active"
          to="pageTop"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img alt="bild" className="korv" url={image} src={image} />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"></Nav>
          <Link
            className="navbarText"
            activeClass="active"
            to="aboutSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
          <Link
            className="navbarText"
            activeClass="active"
            to="contactSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
