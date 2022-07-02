import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import './style.css';
import profleImage from '../../assets/images/mprofile1.png'

const Main = () => {
    return (
        <Container>
            <Row className="main">
                <Col md={1} lg={3}></Col>
                <Col sm={12} md={5} lg={3} className="text">
                    <Image 
                        width={260}
                        height={260}
                        src={profleImage}
                        className="profileImg"/>
                </Col>
                <Col sm={12} md={5} lg={4} className="textCol" >
                    <div mainDiv>
                        <br/>
                        <br/>
                        <h1 className="mainTitle">MICHAEL RAMOS</h1>
                        <h2 className="mainSubTitle">Full Stack Developer</h2>
                        <Button variant="warning">MY RESUME</Button>
                    </div>
                </Col>
                <Col md={1} lg={1}></Col>
            </Row>
        </Container>
    )
}

export default Main;