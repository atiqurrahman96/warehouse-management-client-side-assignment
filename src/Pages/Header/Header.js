
import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Header = () => {
    const [user] = useAuthState(auth);

    const logOut = () => {
        signOut(auth)
    }
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">My Grocery Warehouse</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>


                    </Nav>
                    <Nav>


                        <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                        {
                            user ? <>
                                <Nav.Link as={Link} to='/manageInventories'>Manage Product</Nav.Link>
                                <Nav.Link as={Link} to='/addNewItem'>Add Item</Nav.Link>

                                <Button onClick={logOut}>sign Out</Button>
                            </>


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