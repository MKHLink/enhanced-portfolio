import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import Card from 'react-bootstrap/card';

function Nav(props){
    
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
        <h1 className="mx-2">Mohammad Komol Hasan</h1>

        <ul className="flex-row">
            <li className="mx-2">
                <a href="#about" onClick={()=>{setContactSelected(false); setResumeSelected(false);setPortSelected(false)}}>About Me</a>
            </li>

            <li className={`mx-2 ${portSelected && 'navActive'}`}>
                <span onClick={()=>{setContactSelected(false); setResumeSelected(false);setPortSelected(true)}}>Portfolio</span>
            </li>

            <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
                <span onClick={()=>{setResumeSelected(true); setContactSelected(false);setPortSelected(false)}}>Resume</span>
            </li>

            <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                <span onClick={handleShow}>Contact Me</span>
            </li>
        </ul>

        <Modal className='contact' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Links</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for taking the time to look at my portfolio, you can contact me via the links below.</Modal.Body>
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

export default Nav;