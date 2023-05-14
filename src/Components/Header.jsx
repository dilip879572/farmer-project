
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Styles/Header.css'

function Header() {
  return (

    <Navbar bg="dark" expand="lg" className='hed'>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className='row'>
            <div className='col-sm-7 hed1'>ORGANIC  VEGETABLES    </div>
            <div className='col-sm-5 '>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
        <Nav.Link as={Link} className='hed2' to="/" >Home</Nav.Link>
        <Nav.Link as={Link} className='hed2' to="/about">About</Nav.Link>
        <Nav.Link as={Link} className='hed2' to="/services">Services</Nav.Link>
        <Nav.Link as={Link} className='hed2' to="/Product">Product</Nav.Link>
        <Nav.Link as={Link} className='hed2' to="/contact">Contact</Nav.Link>
        <Nav.Link as={Link} className='hed2' to="/gallery">Gallery</Nav.Link>
     

          </Nav>
          </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}

export default Header;