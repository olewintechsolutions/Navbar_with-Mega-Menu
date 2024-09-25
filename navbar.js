import React, { useState } from 'react';
import { Navbar, Nav, Button, Offcanvas, Container, NavDropdown } from 'react-bootstrap';
import { FaGoogle,  FaLinkedin, FaWhatsapp } from 'react-icons/fa'; // Importing social media icons
import '../styles/navbar.css';
import logo from '../images/logo.png'; // Replace this with your logo's path

const CustomNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleShowOffcanvas = () => setShowOffcanvas(true);
  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  return (
    <>
      <Navbar expand="lg" sticky="top" className="navbar-custom">
        <Container fluid>
          {/* Logo on the left */}
          <Navbar.Brand href="/" className="d-flex ">
            <img src={logo} alt="Logo" className="logo img-fluid" />
          </Navbar.Brand>

          {/* Navbar toggle button for smaller screens */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShowOffcanvas} className="ms-auto" />

          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex gap-2 justify-content-between">
            <Nav className="mx-auto gap-2">
              <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>
              <Nav.Link href="/services" className="nav-link-custom">Services</Nav.Link>
              <Nav.Link href="/programs" className="nav-link-custom">Programs</Nav.Link>

              {/* Dropdowns for Industries and Company */}
              <NavDropdown title="Industries" id="industries-dropdown" className="nav-link-custom">
                <NavDropdown.Item href="/industries">IT & IT-Enabled Services</NavDropdown.Item>
                <NavDropdown.Item href="/industries">Retail & E-Commerce</NavDropdown.Item>
                <NavDropdown.Item href="/industries">Banking & Financial Sector</NavDropdown.Item>
                <NavDropdown.Item href="/mli">Manufacturing & Logistics</NavDropdown.Item>
                <NavDropdown.Item href="/pharma">Pharma & Healthcare</NavDropdown.Item>
                <NavDropdown.Item href="/industries">Energy Sector</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Company" id="company-dropdown" className="nav-link-custom">
                <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
                <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
                <NavDropdown.Item href="/faq">FAQ's</NavDropdown.Item>
              </NavDropdown>

              {/* Enroll and Recruitment Buttons */}
              <Button href="/enroll" className="btn btn-success">Enroll</Button>
              <Button href="/recruitment" className="btn btn-dark">Recruitment</Button>
            </Nav>

            {/* Social Media Icons */}
            <Nav.Link href="/programs" className="nav-link-custom d-flex fs-5"><FaLinkedin /></Nav.Link>
            <Nav.Link href="/programs" className="nav-link-custom d-flex fs-5"><FaWhatsapp /></Nav.Link>
            <Nav.Link href="/programs" className="nav-link-custom d-flex fs-5"><FaGoogle /></Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas Menu for small screens */}
      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end" className="offcanvas-custom">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-dark fw-bold">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column text-center">
            <Nav.Link href="/" onClick={handleCloseOffcanvas}>Home</Nav.Link>
            <Nav.Link href="/services" onClick={handleCloseOffcanvas}>Services</Nav.Link>
            <Nav.Link href="/programs" onClick={handleCloseOffcanvas}>Programs</Nav.Link>

            {/* Dropdown for Industries and Company */}
            <NavDropdown title="Industries" className="text-warning fw-bold">
              <NavDropdown.Item href="/industries" onClick={handleCloseOffcanvas}>IT & IT-Enabled Services</NavDropdown.Item>
              <NavDropdown.Item href="/industries" onClick={handleCloseOffcanvas}>Retail & E-Commerce</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Company" className="text-warning fw-bold">
              <NavDropdown.Item href="/about" onClick={handleCloseOffcanvas}>About Us</NavDropdown.Item>
              <NavDropdown.Item href="/contact" onClick={handleCloseOffcanvas}>Contact Us</NavDropdown.Item>
            </NavDropdown>

            {/* Enroll and Recruitment Buttons */}
            <Button href="/enroll" className="btn bg-success text-light mt-3" onClick={handleCloseOffcanvas}>Enroll</Button>
            <Button href="/recruitment" className="btn bg-dark text-light mt-3" onClick={handleCloseOffcanvas}>Recruitment</Button>

            <Nav.Link href="/programs" className="nav-link-custom fs-5"><FaLinkedin /></Nav.Link>
            <Nav.Link href="/programs" className="nav-link-custom fs-5"><FaWhatsapp /></Nav.Link>
            <Nav.Link href="/programs" className="nav-link-custom d-flex fs-5"><FaGoogle /></Nav.Link>

          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomNavbar;


