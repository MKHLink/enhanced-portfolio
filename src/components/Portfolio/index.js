import React from "react";


import Calculator from "../../Assets/ProjectsPic/calculator.jpg";
import Manager from "../../Assets/ProjectsPic/manager.png";
import Stock from "../../Assets/ProjectsPic/stock.png";
import Fitness from "../../Assets/ProjectsPic/myfitness.png";

import {SiJavascript,SiHtml5,SiCsswizardry,SiTailwindcss,SiNodedotjs,
        SiHandlebarsdotjs,SiSequelize,SiExpress, SiJava,SiReact,
        SiMongodb,SiApollographql, SiJsonwebtokens} from 'react-icons/si';
import {TbApi} from 'react-icons/tb';

import { Card, CardBody, CardFooter, Image,
        Stack, Heading, Text} from '@chakra-ui/react'

function Portfolio(){
    return(
        <main>
        <Card style={{
          marginBottom: 16,
          marginTop: 20
        }}
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '300px' }}
          src={Stock}
          alt='Petfinder'
        />
      
        <Stack>
          <CardBody>
            <Heading size='md'>PetFinder</Heading>

            <Text py='2'>
              
            <SiJavascript/>JavaScript<SiHtml5/>HTML<SiCsswizardry/>CSS <SiTailwindcss/>Tailwind<TbApi/>ThirdParty APIs'<br/>
            <br/>A website users can utilize to find available pets in their surrounding area based on zip code
            <br/>
            <br/>
            <span style={{fontWeight:'bold'}}>Personal Contributions:</span><br/>
                Worked on making both the API's function within the application, and making them interact with each other.<br/>
                Made the data from api display on page created by collaborators.
            </Text>
          </CardBody>
      
          <CardFooter>
          <span>
                        <a style={{fontSize:'large'}} className="links" href="https://github.com/MKHLink/Find_Your_Pet" target="_blank" rel="noreferrer">GitHub</a>
                        <a style={{fontSize:'large',paddingLeft:20}} className="links" href="https://mkhlink.github.io/Find_Your_Pet/" target="_blank" rel="noreferrer">Demo</a>
                    </span>
          </CardFooter>
        </Stack>
      </Card>

      <Card style={{
          marginBottom: 16,
          marginTop: 20
        }}
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        
      
        <Stack>
          <CardBody>
            <Heading size='md'>Workout Finder</Heading>

            <Text py='2'>
              
            <SiNodedotjs/>NodeJS<SiReact/>ReactJS <SiMongodb/>MongoDB <SiJsonwebtokens/>JWT <SiApollographql/>Apollo Server/Client, GraphQL <SiExpress/> ExpressJS<br/>
            <br/>A MERN stack application that gives new users and existing gym goers a sense of community when they workout. Log into to you account where you can search for different types of workouts based on workout type 
            (abs, legs, back, chest, shoulders). Then create and log workouts to see what you’ve done in the past.
            <br/>
            <br/>
            <span style={{fontWeight:'bold'}}>Personal Contributions: </span><br/>
                    Worked on creatiing the API's for the models, made by collaboratiors, using GraphQL
                    <br/>Worked on user authentcation via technologies such as bcrypt and json web tokens
                    <br/>Worked on making use of Apollo Server in the back end
                    <br/>Made queries and mutations work in the front end made by collaborators
            </Text>
          </CardBody>
      
          <CardFooter>
          <span>
                        <a style={{fontSize:'large'}} className="links" href="https://github.com/MKHLink/just-do-it" target="_blank" rel="noreferrer">GitHub</a>
                        <a style={{fontSize:'large',paddingLeft:20}} className="links" href="https://workout-finder.herokuapp.com/" target="_blank" rel="noreferrer">Demo</a>
                    </span>
          </CardFooter>
        </Stack>

        <Image
          objectFit='cover'
         
          maxW={{ base: '100%', sm: '600px' }}
          src={Fitness}
          alt='Fitness'
        />
      </Card>

      <Card style={{
          marginBottom: 16,
          marginTop: 20
        }}
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '500px' }}
          src={Manager}
          alt='Dashboard'
        />
      
        <Stack>
          <CardBody>
            <Heading size='md'>OnlyTasks</Heading>

            <Text py='2'>
              
            <SiNodedotjs/>NodeJS <SiHandlebarsdotjs/>HandlebarsJS <SiSequelize/>Sequelize <SiExpress/>ExpressJS
            <br/>A task tracking website that can be used to create and keep track of tasks
            <br/>
            <br/>
            <span style={{fontWeight:'bold'}}>Personal Contributions:</span><br/>
            <br/>Created the back end mySQL schemas 
                    <br/>Worked on the routing and controllers from backend and frontend APIs'
                    <br/>Made use of bcrypt for user authentication and sessions to keep track of logged in users
                    <br/>Worked on the frontend using handlebars.js and made it interactable
            </Text>
          </CardBody>
      
          <CardFooter>
          <span>
                        <a style={{fontSize:'large'}} className="links" href="https://github.com/MKHLink/Office_task_tracker" target="_blank" rel="noreferrer">GitHub</a>
                        <a style={{fontSize:'large',paddingLeft:20}} className="links" href="https://onlytasks.herokuapp.com/login" target="_blank" rel="noreferrer">Demo</a>
                    </span>
          </CardFooter>
        </Stack>
      </Card>

      <Card style={{
          marginBottom: 16,
          marginTop: 20
        }}
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        
      
        <Stack>
          <CardBody>
            <Heading size='md'>Calculator App</Heading>

            <Text py='2'>
              
            <SiJava/>Java
            <br/>A calculator application that makes use of GUI and is able to perform simple arithmatic operations
            <br/>
            <br/>
            <span style={{fontWeight:'bold'}}>A passion project made while self teaching JAVA </span><br/>
                   
            </Text>
          </CardBody>
      
          <CardFooter>
                <span>
                    <a style={{fontSize:'large'}} className="links" href="https://github.com/MKHLink/Calculator_With_GUI" target="_blank" rel="noreferrer">GitHub</a>
                </span>
          </CardFooter>
        </Stack>

        <Image
          objectFit='cover'
         
          maxW={{ base: '100%', sm: '300px' }}
          src={Calculator}
          alt='Calculator'
        />
      </Card>



        </main>
    );
}

export default Portfolio;

