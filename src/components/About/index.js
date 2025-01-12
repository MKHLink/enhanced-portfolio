import React,{useEffect, useState} from "react";
import { SimpleGrid,Text,Box } from '@chakra-ui/react'

//holds the profile picture and a shor self summery
function About(){

  const [avatarUrl, setAvatarUrl] = useState('');
  const [userInfo, setUserInfo] = useState('');

  useEffect(()=>{
    fetch(`https://api.github.com/users/MKHLink`)
    .then(response => response.json())
    .then(data=>{
      setAvatarUrl(data.avatar_url);
      setUserInfo({
        name: data.name,
        bio: data.bio
      });
    })
    .catch(error=>console.log(error));
  },[]);

    return(
       <main className="about" >
        <SimpleGrid columns={2} spacing={2}>
          <img src={avatarUrl} style={{width:"50%"}}  alt="profile-pic"/>
          <p>
            {userInfo.name}
            <br/>
            {userInfo.bio}
            </p>
        </SimpleGrid>
        <Box p="4" maxW="800px">
        <SimpleGrid columns={1} spacing={4}>
          <Text fontSize="xl" textAlign="justify">
          Linkhon Hasan is a passionate software developer with a strong foundation in programming, honed through a bachelor’s degree in computer science, a Full Stack Development certificate from Columbia University, and the FastTrack program at Cook Systems.
          </Text>
          <Text fontSize="xl" textAlign="justify">
          Currently working as a Full Stack Developer at FedEx, he has enhanced backend performance by optimizing Java Spring Boot applications, designing Angular-based UIs, and implementing Spring Boot REST APIs, which improved user satisfaction and operational efficiency.
          </Text>
          <Text fontSize="xl" textAlign="justify">
          His expertise extends to building CI/CD pipelines with Jenkins and GitHub Actions, automating deployments, and securing seamless cloud-based operations. Linkhon’s contributions include developing robust integration tests with JUnit and Mockito, reducing production incidents, and optimizing SQL databases to streamline operations. 
          </Text>
          <Text fontSize="xl" textAlign="justify">
          Known for his collaborative nature, he mentors peers, conducts code reviews, and fosters team productivity, bringing analytical problem-solving skills and a can-do attitude to every project.
          </Text>
        </SimpleGrid>
      </Box>
       </main>
    );
}

export default About;

