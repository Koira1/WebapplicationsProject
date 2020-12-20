import React from 'react';
import Button from 'react-bootstrap/Button';
import { Collapse, Container, Row, Col } from 'react-bootstrap';

const Header = () => {
    
    return(
        <div className="header">
            <Container>
                <Row>
                    <Col md={9}>
                        <h1>Twatter</h1>
                    </Col>
                    <Col sm={3}>
                        <Button variant="primary">Log in</Button>
                        <Button variant="primary" onClick="">Sign up</Button>
                    </Col>
                </Row>   
            </Container>       
        </div>               
    )
}

export default Header