import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Pizza from '../assets/Pizza.png';

const Header = () => {
  return (
    <>
    <Navbar sticky="top" bg="black" variant="dark">
        <Container style={{margin: "5px"}}>
            <img src={Pizza} alt="Pizza" style={{width: "3vw", marginRight: "0.75rem"}} />
            <Link to = "/" style={{ textDecoration: "none",color: "black"}}>
                <Navbar.Brand style={{fontWeight: "bold", fontStyle: "bold"}}>Pizzeria</Navbar.Brand>
            </Link>
            <Nav className="me-auto">
                <Nav.Link>Today's Special</Nav.Link>
                <Nav.Link>What's New</Nav.Link>
                <Nav.Link>Deals @ ₹99/-</Nav.Link>
                <Nav.Link>Bulk Orders</Nav.Link>
            </Nav>
        </Container>
    </Navbar>    
    </>
  );
}

export default Header;