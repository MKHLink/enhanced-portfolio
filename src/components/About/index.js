import React from "react";
import PFP from "../../Assets/ProfilePic/PFP.jpg";

function About(){
    return(
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={PFP} className="my-2" style={{width:"50%"}} alt="profile-pic"/>
            <p className="mx-1">
                 I am an aspiring software developer currently enrolled in a rigourous coding bootcamp at Columbia Coding Bootcamp.<br />
                 <br/>
                I have attened Borough of Manhattan Community College and 
                obtained an Associates Degree in Computer Scinece. <br />
                <br/>
                My hobbies include soccer, video games and exploring diffrent software languages.<br />
                My dream is to have my own video game studio one day and hence
                I am building my career around software development.<br />
                <br/>
                Thank you for taking the time to browse through my page.
            </p>
        </section>
    );
}

export default About;