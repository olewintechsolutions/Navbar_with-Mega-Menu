import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {  FaInstagram,  FaGoogle, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import '../styles/footer.css'; // Custom styles
import logo from '../images/logo3.png'; // Replace with your logo

const Footer = () => {
  return (
    <footer className="footer-custom py-5 gap-5 ">
      <Container fluid>
        <Row className="gy-4 justify-content-center">
          {/* Logo and Tagline */}
          <Col xs={6} md={6} lg={3} className="text-center text-md-start">
            <div className="footer-logo">
              <img src={logo} alt="Logo" className="img-fluid mb-3 " />
              <p className="footer-tagline grad-title fw-bold">Your tagline goes here</p>
            </div>
          </Col>

          {/* Courses Links */}
          <Col xs={6} md={6} lg={2} className="text-center text-md-start">
            <h5 className="footer-heading">Courses</h5>
            <ul className="footer-links">
              <li><a href="/beginner-courses">Beginner Courses</a></li>
              <li><a href="/advanced-courses">Advanced Courses</a></li>
              <li><a href="/certifications">Certifications</a></li>
              <li><a href="/online-training">Online Training</a></li>
            </ul>
          </Col>

          {/* Services Links */}
          <Col xs={6} md={6} lg={2} className="text-center text-md-start">
            <h5 className="footer-heading">Training</h5>
            <ul className="footer-links">
              <li><a href="/personal-coaching">Personal Coaching</a></li>
              <li><a href="/group-training">Group Training</a></li>
              <li><a href="/learning-path">Learning Path Guidance</a></li>
              <li><a href="/content-creation">Content Creation</a></li>
              <li><a href="/">InterView Cracking</a></li>
              <li><a href="/">Placement Assistance</a></li>
              
            </ul>
          </Col>

          {/* More Links */}
          <Col xs={6} md={6} lg={2} className="text-center text-md-start">
            <h5 className="footer-heading">More</h5>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/faq">FAQs</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/policy">Privacy Policy</a></li>
              <li><a href="/copy">Copy-Right</a></li>
            </ul>
          </Col>

          {/* Social Media Icons */}
          <Col xs={6} md={6} lg={2} className="text-center">
            <h5 className="footer-heading">Connect with Us</h5>
            <div className="footer-social-icons">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="me-3"><FaLinkedin /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-3"><FaInstagram /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-3"><FaWhatsapp /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-3"><FaGoogle /></a>
            </div>
          </Col>
        </Row>
        <hr className="my-4" style={{ borderColor: '#444' }} />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} MAPVAK. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
