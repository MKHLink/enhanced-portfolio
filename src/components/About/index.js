import React from "react";
import PFP from "../../Assets/ProfilePic/PFP.jpg";
import Image from 'react-bootstrap/Image'
import Figure from 'react-bootstrap/Figure';

function About(){
    return(
        <section className="my-5">
            

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
        </section>
    );
}

export default About;