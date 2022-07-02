import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const AboutMe = () => {
  return (
    <Container id="about">
      <Row className="aboutRow">
        <Col md={4}>
          <div className="aboutCol">
            <h3 className="aboutText">Front-End</h3>
            <p className="pText">Designing application's user experience to effectively and aesthetically deliver information to site visitors.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="aboutCol">
            <h3 className="aboutText">Back End</h3>
            <p className="pText">
              Building database and table structures following architecture methodology for web applications.
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className="aboutCol">
            <h3 className="aboutText">IT Support</h3>
            <p className="pText">Troubleshooting computer systems and monitoring system networks for optimal function.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
