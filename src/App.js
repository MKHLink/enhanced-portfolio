import React,{useState} from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        contactSelected = {contactSelected}
        setContactSelected = {setContactSelected}
      ></Nav>
      <main>
        {!contactSelected?(
          <>
            <About></About>
            <Resume></Resume>
          </>
        ):(
          <Contact></Contact>
        )}
      </main>
    </div>
  );
}

export default App;
