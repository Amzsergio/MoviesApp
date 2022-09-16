import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas'
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'

const NavbarComp = () => {
  return (
    <div>
         <Navbar bg="dark" variant="dark" expand='md'>
                <Container fluid>
                        <Navbar.Brand href="/">
                            <img
                                alt="logo"
                                src="/yourMovieLogo.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{" "}
                            YourMovie</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`}/>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-md`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                                    <Navbar.Brand href="/">
                                        <img
                                            alt="logo"
                                            src="/yourMovieLogo.png"
                                            width="30"
                                            height="30"
                                            className="d-inline-block align-top"
                                        />{" "}
                                    YourMovie</Navbar.Brand>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav variant='tabs' className='justify-content-end flex-grow-1 pe-5'>
                                    <Nav.Link as={Link} to={"/"} >Home</Nav.Link>
                                    <Nav.Link as={Link} to={"/favourites"}>Favourites</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        
                </Container>
            </Navbar> 
    </div>
  )
}

export default NavbarComp



// <Nav.Item>
// <Nav.Link as={Link} to={"/"} >Home</Nav.Link>
// </Nav.Item>
// <Nav.Item>
{/* <Nav.Link as={Link} to={"/favourites"}>Favorites</Nav.Link> */}
// </Nav.Item>