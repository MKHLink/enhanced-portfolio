import React,{useState} from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {

  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Nav
        contactSelected = {contactSelected}
        setContactSelected = {setContactSelected}
        resumeSelected = {resumeSelected}
        setResumeSelected = {setResumeSelected}
      ></Nav>
      <main>
        {!contactSelected && !resumeSelected?(
          <>
            <About></About>
          </>
        ):contactSelected && !resumeSelected?(
          <><Contact></Contact></>
        ):resumeSelected && !contactSelected?(
          <><Resume></Resume></>
        ):(<></>)}


      </main>
    </div>
  );
}

export default App;
