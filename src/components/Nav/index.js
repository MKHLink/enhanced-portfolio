import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/card';

function Navigation(props){
    
    const {
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected,
        portSelected,
        setPortSelected
        } = props;

        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    
    return (
    <header>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Mohammad Komol Hasan</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about" onClick={()=>{setContactSelected(false); setResumeSelected(false);setPortSelected(false)}}>About Me</Nav.Link>
            <Nav.Link ><li className={`mx-2 ${portSelected && 'navActive'}`}>
                <span onClick={()=>{setContactSelected(false); setResumeSelected(false);setPortSelected(true)}}>Portfolio</span>
                </li>
            </Nav.Link>
            <Nav.Link>
                <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
                    <span onClick={()=>{setResumeSelected(true); setContactSelected(false);setPortSelected(false)}}>Resume</span>
                </li>
            </Nav.Link>
            <Nav.Link>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <span onClick={handleShow}>Contact Me</span>
                </li>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        <Modal className='cards' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Have a question?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Let's get to know each other. How can I be useful to your service?
Please feel free to reach out to me. I would be delighted to answer all your questions or concerns.</Modal.Body>
        <Modal.Footer style={{
          display: "flex",
          justifyContent: "center",
        }}>
            <Card.Link href="mailto: likhon.hasan312@gmail.com" centered>Email</Card.Link>
            <Card.Link href="https://www.linkedin.com/in/likhonhasan312/"  centered target="_blank" rel="noreferrer">LinkedIn</Card.Link>
        </Modal.Footer>
      </Modal>
    </header>
    );
}

export default  Navigation;