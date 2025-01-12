import React, { useState, useEffect } from "react";
import { Box, Spinner, SimpleGrid } from "@chakra-ui/react";
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text } from '@chakra-ui/react';


const repoIdsToShow = ["589136807", "561504083", "728958589","534423498","746826840","584873557","578743255","883791818","907060764"]; 

function Portfolio() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/MKHLink/repos?per_page=100");
        const data = await response.json();
  
        let nextPage = 2;
        while (response.headers.get("Link") && nextPage <= 10) { 
          const nextPageResponse = await fetch(`https://api.github.com/users/MKHLink/repos?per_page=100&page=${nextPage}`);
          const nextPageData = await nextPageResponse.json();
          data.push(...nextPageData);
          nextPage++;
        }
        
        console.log(data);
        const filteredRepos = data.filter(repo => repoIdsToShow.includes(repo.id.toString()));

        setRepos(filteredRepos);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    };
  
    fetchRepos();
  }, []);
  

  return (
    <main>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="500px"
        >
          <Spinner size="xl" />
        </Box>
      ) : (
        <Box  display="flex"
        justifyContent="center"
        marginTop="20px"
        marginRight="20px"
        alignItems="center"
        >
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        <Card style={{ overflow: 'hidden' }} variant='outline'>
        <CardBody>
                  <Heading size='md'>Twitter Api</Heading>
                  <Text py='2'>A web application made with Java, SpringBoot and PostgreSQL that works with HTTP requests and provies CRUD functionality for a Twiter Application </Text>
                  <Text py='2'>Made with: Java </Text>
                </CardBody>
                <CardFooter>
                  <span>
                    <a style={{ fontSize: 'large' }} className="links" href="https://github.com/fasttrackd-student-work/spring-assessment-social-media-sprint-10-2023-team-5" target="_blank" rel="noreferrer">GitHub</a>
          
                  </span>
                </CardFooter>
        </Card>

          {repos.map((repo) => (
            <Card key={repo.id} style={{ overflow: 'hidden' }} variant='outline'>
              <Stack>
                <CardBody>
                  <Heading size='md'>{repo.name}</Heading>
                  <Text py='2'>{repo.description}</Text>
                  <Text py='2'>Made with: {repo.language}</Text>
                </CardBody>
                <CardFooter>
                  <span>
                    <a style={{ fontSize: 'large' }} className="links" href={repo.html_url} target="_blank" rel="noreferrer">GitHub</a>
          
                  </span>
                </CardFooter>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
        </Box>
      )}
    </main>
  );
}

export default Portfolio;
