import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import Calculator from "../../Assets/ProjectsPic/calculator.jpg";
import Manager from "../../Assets/ProjectsPic/manager.png";
import Stock from "../../Assets/ProjectsPic/stock.jpg";
import Fitness from "../../Assets/ProjectsPic/myfitness.png";

import {SiJavascript,SiHtml5,SiCsswizardry,SiTailwindcss,SiNodedotjs,
        SiHandlebarsdotjs,SiSequelize,SiExpress, SiJava,SiReact,
        SiMongodb,SiApollographql, SiJsonwebtokens} from 'react-icons/si';
import {TbApi} from 'react-icons/tb';

//all images are imported and bootstarp is used to set up a mobile responsive grid for the projects
function Portfolio(){
    return(
    <section className="caro">

        <Carousel className="caro2" variant="dark">
            <Carousel.Item>
                <img className="d-block w-100" id="carImg" src ={Stock} alt="pet-pics"/>
                <Carousel.Caption>
                    <h2>Find-Your-Pet</h2>
                    <h3><SiJavascript/> <SiHtml5/> <SiCsswizardry/> <SiTailwindcss/> <TbApi/> </h3>
                    <p>A website users can utilize to find available pets in their surrounding area based on zip code</p>
                    <br/>
                    <p style={{textAlign: 'justify', fontSize:22}}>Personal Contributions: <br/> Worked on making both the API's function within the application, and making them interact with each other.
                        <br/> Made the data from api display on page created by collaborators.
                    </p>
                    <span>
                        <a href="https://github.com/MKHLink/Find_Your_Pet" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://mkhlink.github.io/Find_Your_Pet/" target="_blank" rel="noreferrer">Demo</a>
                    </span>
                </Carousel.Caption>
            </Carousel.Item>
        
            <Carousel.Item>
                <img className="d-block w-100" id="carImg" src={Fitness} alt="fitness"/>
                <Carousel.Caption>
                    <h2>Workout Finder</h2>
                    <h3><SiNodedotjs/> <SiReact/> <SiMongodb/> <SiJsonwebtokens/> <SiApollographql/> <SiExpress/> </h3>
                    <p>A MERN stack application that gives new users and existing gym goers a sense of community when they workout. Log into to you account where you can search for different types of workouts based on workout type (abs, legs, back, chest, shoulders). Then create and log workouts to see what you’ve done in the past.</p>
                    <br/>
                    <p style={{textAlign: 'justify', fontSize:22}}>Personal Contributions: <br/>
                    Worked on creatiing the API's for the models, made by collaboratiors, using GraphQL
                    <br/>Worked on user authentcation via technologies such as bcrypt and json web tokens
                    <br/>Worked on making use of Apollo Server in the back end
                    <br/>Made queries and mutations work in the front end made by collaborators</p>
                    <span>
                        <a href="https://github.com/MKHLink/just-do-it" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://workout-finder.herokuapp.com/" target="_blank" rel="noreferrer">Demo</a>
                    </span>
                </Carousel.Caption>
            </Carousel.Item>
       
            <Carousel.Item>
                <img className="d-block w-100" id="carImg" src={Manager} alt="dashboard"/>
                <Carousel.Caption>
                    <h2>OnlyTasks</h2>
                    <h3><SiNodedotjs/> <SiHandlebarsdotjs/> <SiSequelize/> <SiExpress/></h3>
                    <p>A task tracking website that can be used to create and keep track of tasks</p>
                    <br/>
                    <p style={{textAlign: 'right', fontSize:22}}>Personal Contributions:
                    <br/>Created the back end mySQL schemas 
                    <br/>Worked on the routing and controllers from backend and frontend APIs'
                    <br/>Made use of bcrypt for user authentication and sessions to keep track of logged in users
                    <br/>Worked on the frontend using handlebars.js and made it interactable</p> 
                    <span>
                        <a href="https://github.com/MKHLink/Office_task_tracker" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://onlytasks.herokuapp.com/login" target="_blank" rel="noreferrer">Demo</a>
                    </span>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" id="carImg" src={Calculator} alt="calculator"/>
                <Carousel.Caption>
                    <h2>Calculator App</h2>
                    <h3><SiJava/> </h3>
                    <p>A calculator application that makes use of GUI and is able to perform simple arithmatic operations</p>
                    <br/>
                    <p style={{ fontSize:22}}>A passion project made while self teaching JAVA</p>
                    <span>
                        <a href="https://github.com/MKHLink/Calculator_With_GUI" target="_blank" rel="noreferrer">GitHub</a>
                    </span>
                </Carousel.Caption>
            </Carousel.Item>


        </Carousel>

    </section>
    );
}

export default Portfolio;
