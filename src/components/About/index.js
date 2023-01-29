import React from "react";
import PFP from "../../Assets/ProfilePic/PFP.jpg";
import { SimpleGrid } from '@chakra-ui/react'

//holds the profile picture and a shor self summery
function About(){
    return(
       <main className="about" >
        <SimpleGrid>
          <img src={PFP} style={{width:"25%"}}  alt="profile-pic"/>
        </SimpleGrid>
        <SimpleGrid>
            <p>
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
            </p>
        </SimpleGrid>
       </main>
    );
}

export default About;

