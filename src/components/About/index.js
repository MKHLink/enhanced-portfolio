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
            Linkhon Hasan is a software developer with a passion for programming. His love for coding started in high school, and he decided to pursue software development as a career.
          </Text>
          <Text fontSize="xl" textAlign="justify">
            He is a graduate of the FastTrack program from Cook Systems and holds a bachelor’s degree in computer science, as well as a Full Stack Development certificate from Columbia University.
          </Text>
          <Text fontSize="xl" textAlign="justify">
            Linkhon has worked in multiple diverse teams upon graduation, such as startups and established companies. He gained hands-on experience with Spring Boot at FastTrack, which further solidified his love and resolve for backend programming and the Java language itself.
          </Text>
          <Text fontSize="xl" textAlign="justify">
            He possesses an optimistic and easy-to-get-along characteristic, which adds to the productivity of a team. Linkhon brings along analytical problem-solving skills and a can-do attitude to any project he is a part of.
          </Text>
        </SimpleGrid>
      </Box>
       </main>
    );
}

export default About;

