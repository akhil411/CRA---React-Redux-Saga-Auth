import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const Header = () => {
    const activeStyle = { color: "#F15B2A" };
    return (
        <Navbar bg="light" expand="sm">
            <NavLink to="/" activeStyle={activeStyle} exact className="navbar-brand">Home</NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto navbar-right-section">
                    <NavLink to="/register" activeStyle={activeStyle} className="nav-link">Register</NavLink>
                    <NavLink to="/about" activeStyle={activeStyle} className="nav-link">Login</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
