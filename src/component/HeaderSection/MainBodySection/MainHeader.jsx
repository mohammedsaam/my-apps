            import React from 'react';
            import { Jumbotron, Navbar, Nav, Form, FormControl, Button, Image } from "react-bootstrap";
            import './MainHeader.css';

            export const MainHeader = () => {
                return (
                    <div>
                        <Jumbotron>
                        <marquee behavior="alternate"> <h1>PICKUPBIZ</h1> </marquee>
                        <Navbar bg="dark" variant="dark" className="Main-header--position" >
                <Navbar.Brand href="#home">
                    <Image src="Assets/pickupbiz.jpg" className="main-header--image"/>
                PIckupBiz</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>

                        </Jumbotron>
                    </div>
                );
            };