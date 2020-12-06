import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AuthContext } from "../../context/AuthContext";
import Logout from "../auth/Logout";
import Register from "../auth/Register";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Navigation() {
    const { user } = useContext(AuthContext);

    return (
        <Navbar sticky="top" expand="md" className="navigation">
            <NavLink to="/" exact>
                <img src="./logo.png" className="nav__logo" alt="logo" />
                <Navbar.Brand className="nav-title navbar__title"> Holidaze</Navbar.Brand>
            </NavLink >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav className="mr-auto">
                    <NavLink to="/hotels" className="nav-link navbar__link">Hotels</NavLink>
                    <NavLink to="/contact" className="nav-link navbar__link">Contact</NavLink>
                    <NavDropdown className="navbar__dropdown" title={user ? (
                        <>
                            Logged in {<FontAwesomeIcon icon={faUser} />}
                        </>
                    ) : (
                            <>
                                Login {<FontAwesomeIcon icon={faUser} />}
                            </>

                        )}

                        id="navbar__dropdown">
                        <Container >
                            {user ? (
                                <>
                                    <NavLink to="/admin" className="nav__admin">Dashboard</NavLink>
                                    <NavDropdown.Divider />
                                    <Logout />
                                </>
                            ) : (
                                    <Register />

                                )}
                        </Container>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;