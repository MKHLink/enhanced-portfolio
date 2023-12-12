import React,{useState} from "react";
import  Navigation from "./components/Nav";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";


import { Box } from "@chakra-ui/react";
import { Col, Row } from 'antd';

function App() {

  const [resumeSelected, setResumeSelected] = useState(false);
  const [portSelected, setPortSelected] = useState(false);

  return (
    <Box style={{overflow:'auto'}} w='100%' h='100vh' bgGradient='linear(to-r, gray.600, blue.900)'>
     
      <Row>
        <Col flex="1 0 25%">
        <Navigation
        resumeSelected = {resumeSelected}
        setResumeSelected = {setResumeSelected}
        portSelected = {portSelected}
        setPortSelected = {setPortSelected}
      ></ Navigation>
        </Col>

        <Col flex="1 0 75%">
        <div>
        {!resumeSelected && !portSelected?(
          <>
            <About></About>
          </>
        ):resumeSelected  && !portSelected?(
          <><Resume></Resume></>
        ):portSelected && !resumeSelected?(
        <><Portfolio></Portfolio></>
        ):(
          <></>
        )}
        </div>
        </Col>
      </Row>
      
        <footer>
            <Box className="gitHub">
              <a  href="https://github.com/MKHLink" target="_blank" rel="noreferrer">GitHub</a>
            </Box>
          </footer>

    </Box>
  );
}

export default App;


      
