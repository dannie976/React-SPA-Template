// REACT imports
import { useState } from 'react';

// bootstrap components imports
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';

// custom components imports
import MenuEntry from './MenuEntry';

export default function NavigationDrawer(props) {

    const menuItemsList = props.menuItems.map((item) => {
        return (
            <MenuEntry
                key={item.id}
                id={item.id}
                icon={item.icon}
                title={item.title}
                badge={item.badge}
                description={item.description}
                whenClicked={props.whenClicked}
            />
        );
    });

    return (
        <Navbar.Offcanvas id={`offcanvasNavbar-expand-${props.navbar_size}`} aria-labelledby={`offcanvasNavbarLabel-expand-${props.navbar_size}`} placement="start">
            
            <Offcanvas.Header closeButton onClick={props.whenOffcanvasClosed}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${props.navbar_size}`}>
                    Menü
                </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
                <Stack gap={3}>
                        <ListGroup as="ol" variant="flush">
                            {menuItemsList}
                        </ListGroup>
                </Stack>
            </Offcanvas.Body>

        </Navbar.Offcanvas>
    );

}