import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./style.css";
import riddle from "../../assets/images/riddle.png";
import weather from "../../assets/images/weather.png";
import schedule from '../../assets/images/schedule.png';

const MyWork = () => {
  return (
    <Container id="work">
      <Row className="workRow">
        <Col md={4}>
          <Card className="cardBox" style={{ width: "25rem" }}>
            <Card.Img variant="top" src={riddle} />
            <Card.Body className="cardBody">
              <Card.Title>Riddle Me This</Card.Title>
              <Card.Text>
                Is a fun riddle game that can support strength problem solving,
                logic and critical thinking skills. Inspired by the Batman
                comics.
              </Card.Text>
              <a class="btn btn-secondary" href="https://github.com/MichaelR432/Riddle-Me-This" role="button">Home Page</a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src={weather} />
            <Card.Body className="cardBody">
              <Card.Title>Weather Dashboard</Card.Title>
              <Card.Text>
                A weather search engine and five day forecast dashboard. 
              </Card.Text>
              <a class="btn btn-secondary" href="https://github.com/MichaelR432/weather-or-not-dashboard" role="button">Home Page</a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src={schedule} />
            <Card.Body className="cardBody">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                A cool day scheduler built with javascript to plan daily tasks. 
              </Card.Text>
              <a class="btn btn-secondary" href="https://github.com/MichaelR432/Another-Day-Scheduluer" role="button">Home Page</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MyWork;
