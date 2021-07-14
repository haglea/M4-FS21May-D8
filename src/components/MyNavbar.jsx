import React from 'react';
import { Container, Form, Dropdown, NavDropdown, Nav, Navbar  } from "react-bootstrap";
import { BellFill, Search, SortDown } from 'react-bootstrap-icons';
import logo from "../assets/Netflix_Logo_RGB.png"
import profilePicture from "../assets/profile-character.jpg"

const MyNavbar = () => {
  
        return (
            <Container fluid style={{background: "black"}}>
                <Navbar expand="lg">
                    <Navbar.Brand href="#">
                        <img src={logo} 
                        alt=""
                        style={{width: "10rem"}}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                    <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Nav.Link href="#" style={{color: "white"}}>Home</Nav.Link>
                    <Nav.Link href="#action1" style={{color: "white"}}
                    className="active">TV Shows</Nav.Link>
                    <Nav.Link href="#action2" style={{color: "white"}}>Movies</Nav.Link>
                    <Nav.Link href="#" style={{color: "white"}}>Recently Added</Nav.Link>
                    <Nav.Link href="#" style={{color: "white"}}>My List</Nav.Link>                                      
                    </Nav>

                    <Form className="d-flex mt-2">
                        <a href="#"><Search style={{color: "white"}} size= {25} /></a>
                        <h6 className="mx-4 mt-2" style={{color: "white"}}>KIDS</h6>
                        <a href="#"><BellFill style={{color: "white"}} size= {25} /></a>
                        <img className="ml-4" src={profilePicture}
                            style={{color: "white", width:"2rem", height: "2rem"}}
                            />
                        <a class="nav-link dropdown-toggle text-white mx-0" href="#" id="navbarDropdown" role="button" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        </a>   
                    </Form>

                   
                    </Navbar.Collapse>
                </Navbar>
                
            </Container>
        );
}

export default MyNavbar;