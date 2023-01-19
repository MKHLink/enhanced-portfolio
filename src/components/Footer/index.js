import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


//a simple footer that holds link to github and linkedin
function Footer(){
    return(
        <footer>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="https://github.com/MKHLink" target="_blank" rel="noreferrer">GitHub</Navbar.Brand>
            </Container>
        </Navbar>
        </footer>
    );
}

export default Footer;