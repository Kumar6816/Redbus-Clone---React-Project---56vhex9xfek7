import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (
    <div>NavBar
        <Row>
          <Col>
          <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
            <Nav.Link ><Link to='/list'>list</Link></Nav.Link>
            <Nav.Link ><Link to='/checkout'>checkout</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
          </Col>
       </Row>

    </div>
  )
}

export default MenuBar