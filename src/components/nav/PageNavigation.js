// REACT imports
import { useState } from 'react';

// bootstrap components imports
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// custom components imports
import NavigationDrawer from './NavigationDrawer';

// image imports
import logo from '../../img/react-logo.png';

// global variables
const navbar_size = "false"; // options: 'false', 'sm', 'md', 'lg', 'xl', 'xxl'

export default function PageNavigation(props) {

    return (
        <Navbar expand={navbar_size} className="bg-dark mb-3" variant="dark" expanded={props.menuExpanded}>
            
            <Container fluid>

                <Navbar.Toggle
                    aria-controls={`offcanvasNavbar-expand-${navbar_size}`}
                    onClick={() => props.setExpanded(true)}
                />

                <Navbar.Brand href="#">
                    React SPA Template
                </Navbar.Brand>

                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />

                <NavigationDrawer
                    navbar_size={navbar_size}
                    menuItems={props.menuItems}
                    whenClicked={props.whenClicked}
                    whenOffcanvasClosed={() => props.setExpanded(false)}
                />

            </Container>

        </Navbar>
    );

}