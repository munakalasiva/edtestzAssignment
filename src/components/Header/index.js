import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../Screenshot_2024-05-15_121708-removebg.png";
import "./index.css";
const Header=()=>{

    return(
     /* 
       
        */
       
        <Navbar  expand="lg" className="custom-navbar">
        <Container className="items-separation">
          <Navbar.Brand href="/home">
                       <img src={logo}
                            width="120"
                            height="80"
                            className="d-inline-block align-top head-img"
                            alt="Logo"/>
          </Navbar.Brand>
          <Navbar.Toggle classsName="custome-toggler" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home" className="nav-menu-item">Home</Nav.Link>
              <Nav.Link as={Link} to="/services" className="nav-menu-item">Services</Nav.Link>
              <Nav.Link as={Link} to="/careers" className="nav-menu-item">Careers</Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-menu-item">About</Nav.Link>
              <Nav.Link as={Link} to="/team" className="nav-menu-item">Team</Nav.Link>
              <Nav.Link as={Link} to="/contact-us" className="nav-menu-item">Contact Us</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar> 
      
      
    )
}

export default Header