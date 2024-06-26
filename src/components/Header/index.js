
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./index.css";
const Header=()=>{

    return(
     /* 
       
        */
       
        <Navbar  expand="lg" className="custom-navbar">
        <Container className="items-separation">
          <Navbar.Brand href="/">
                       <img src="https://glignesis.com/images/Glignesis.png"
                            width="120"
                            height="80"
                            className="d-inline-block align-top head-img"
                            alt="Logo"/>
          </Navbar.Brand>
          <Navbar.Toggle classsName="custome-toggler" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="nav-menu-item">Home</Nav.Link>
              <Nav.Link href="/services" className="nav-menu-item">Services</Nav.Link>
              <Nav.Link href="/careers" className="nav-menu-item">Careers</Nav.Link>
              <Nav.Link href="/about" className="nav-menu-item">About</Nav.Link>
              <Nav.Link href="/team" className="nav-menu-item">Team</Nav.Link>
              <Nav.Link href="/contact us" className="nav-menu-item">Contact us</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar> 
      
      
    )
}

export default Header