import React from 'react';
import  './Navbar.css';
 // import react-bootstrap css file
    import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

const NavbarTop = (props) => {
    return (
      
      <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'white',color:'black'}}>
  <Container>
  <Navbar.Brand href="#home">vCode</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />

    <Nav style={{marginLeft:'1000px'}}>
        <Button variant="outline-dark" style={{paddingLeft:'30px',paddingRight:'30px'}}  onClick={props.handleBtnClick}>Login / Signup </Button>
    </Nav>
  </Container>
</Navbar>
    );
};

export default NavbarTop;