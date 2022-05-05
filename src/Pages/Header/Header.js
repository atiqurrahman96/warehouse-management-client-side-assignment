
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Header = () => {
    const [user] = useAuthState(auth);
    console.log('user', user);
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="home#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>


                    </Nav>
                    <Nav>
                        {/* <Nav.Link as={Link} to='/login'>Log in</Nav.Link> */}

                        <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                        {
                            user ?
                                <Button>sign Out</Button>
                                :
                                <Nav.Link as={Link} to='/login'>Log in</Nav.Link>
                        }

                        <Nav.Link eventKey={2} href="#signUp" as={Link} to='/signUp'>
                            Sign Up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;