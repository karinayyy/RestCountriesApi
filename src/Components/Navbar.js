import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { SlMagnifier } from "react-icons/sl";
import {Link} from "react-router-dom";

function NavFunc() {
    return(
        <Navbar bg="primary" variant="dark" expand="">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link style={{color: "white"}} to={`/home`}>Home</Link>
                        <Link style={{color: "white"}} to={`/`}>Country</Link>
                    </Nav>
                </Navbar.Collapse>
                <div>
                    <InputGroup size="sm" className="m-3">
                        <Button variant="light" type="submit">
                            <SlMagnifier />
                        </Button>
                        <Form.Control
                            placeholder="It doesn`t work\\\"
                        />
                    </InputGroup>
                </div>
            </Container>
        </Navbar>
    )
}

export default NavFunc;