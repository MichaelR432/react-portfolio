import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
import './style.css'

const Contact = () => {

    return (
    
        <Container id="contact">
            <Row className="containerRow">
                <Col>
                        <h2 className='contactHeader'>Connect with me: </h2>
                </Col>
                <Col>
                    <a href='https://github.com/MichaelR432'>
                        <h3 className='contactHeader'>GitHub</h3>
                    </a>
                </Col>
                <Col>
                    <a href='https://www.linkedin.com/in/michael-ramos-4399aa1a4/'>
                        <h3 className='contactHeader'>LinkedIn</h3>
                    </a>
                    
                </Col>
                <Col>
                    <a href="mailto:michaelaramos182@gmail.com">
                        <h3 className='contactHeader'>Email</h3>
                    </a>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Contact;