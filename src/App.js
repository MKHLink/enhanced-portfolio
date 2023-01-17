import React,{useState} from "react";
import  Navigation from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {

  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [portSelected, setPortSelected] = useState(false);

  return (
    <div>
      < Navigation
        contactSelected = {contactSelected}
        setContactSelected = {setContactSelected}
        resumeSelected = {resumeSelected}
        setResumeSelected = {setResumeSelected}
        portSelected = {portSelected}
        setPortSelected = {setPortSelected}
      ></ Navigation>
      <main>
        {!contactSelected && !resumeSelected && !portSelected?(
          <>
            <About></About>
          </>
        ):contactSelected && !resumeSelected && !portSelected?(
          <><Contact></Contact></>
        ):resumeSelected && !contactSelected && !portSelected?(
          <><Resume></Resume></>
        ):portSelected && !contactSelected && !resumeSelected?(
        <><Portfolio></Portfolio></>
        ):(
          <></>
        )}

        <Footer></Footer>

      </main>
    </div>
  );
}

export default App;
