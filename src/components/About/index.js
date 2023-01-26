import React from "react";
import PFP from "../../Assets/ProfilePic/PFP.jpg";
import {Row, Col} from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';

//holds the profile picture and a shor self summery
function About(){
    return(
        <section className="my-5">
            <Row>
                <Col xs={12}>
                <Figure>
            <Figure.Image className="my-2" src={PFP} style={{width:"35%"}} rounded alt="profile-pic"/>
            <Figure.Caption className="my-5">
            Full Stack dveloper with passion for MERN stack applictions and back end development<br />
                <br/>
                Achived Full Stack Certificate from Columbia Engineering
                <br/>
                Have attened Borough of Manhattan Community College and 
                obtained an Associates Degree in Computer Scinece. <br />
                <br/>
                My hobbies include soccer, video games and exploring diffrent software languages.<br />
                My dream is to have my own video game studio one day and hence
                I am building my career around software development.<br />
                <br/>
                Thank you for taking the time to browse through my page.
            
      </Figure.Caption>
    </Figure>
                </Col>
            </Row>
        </section>
    );
}

export default About;