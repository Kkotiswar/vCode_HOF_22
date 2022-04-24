import React from 'react';
// import react-bootstrap css file
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
let ns = {
  "bg-color-dark": "#2b616d",
  "text-color-light": "#b2dbd5",
  "bg-color-light": "#ffffff",
  "imp-color": "#fa8d62",
  "text-color-dark": "#2b616d"
}
const NavbarSec = (props) => {
  // const [problem, setProblem] = React.useState(false);
  // const [contest, setContest] = React.useState(false);
  // const handleContests =()=>{
  //    problem===true?setProblem(false):setProblem(true);
  // }
  // const handleProblems =()=>{
  //     contest===true?setContest(false):setContest(true);
  // }
  return (
    <div>

      <Navbar className='navbar' style={{ backgroundColor: ns['bg-color-dark'] }}  >
        <Container>
          <Navbar.Brand style={{ color: ns['imp-color'] }} href="#home">vCode</Navbar.Brand>
          <Button onClick={props.handleBtnClick}>New User / Login</Button>
        </Container>
      </Navbar>

      <Navbar className='navbar2 navbar' >
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto nav_class">
            <Nav.Link className='nav_item_class' href="/">Home</Nav.Link>
            <NavDropdown className='nav_item_class' title="Practice" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/contests" > Contests</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/problems" >Problems</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='nav_item_class' href="/doubt">Discuss</Nav.Link>
            <NavDropdown className='nav_item_class' title="Visualiser" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/mystats">My stats</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/compare">Compare</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='nav_item_class' href="/learn">Learn</Nav.Link>
            <NavDropdown className='nav_item_class' title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

    </div>
  );
};

export default NavbarSec;