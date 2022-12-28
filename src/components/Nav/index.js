import React from "react";

function Nav(props){
    
    const {
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected,
        portSelected,
        setPortSelected
        } = props;
    
    return (
    <header>
        <h1 className="mx-2">Mohammad Komol Hasan</h1>

        <ul className="flex-row">
            <li className="mx-2">
                <a href="#about" onClick={()=>{setContactSelected(false); setResumeSelected(false);setPortSelected(false)}}>About Me</a>
            </li>

            <li className={`mx-2 ${portSelected && 'navActive'}`}>
                <span onClick={()=>{setContactSelected(false); setResumeSelected(false);setPortSelected(true)}}>Portfolio</span>
            </li>

            <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
                <span onClick={()=>{setResumeSelected(true); setContactSelected(false);setPortSelected(false)}}>Resume</span>
            </li>

            <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                <span onClick={()=>{setContactSelected(true);setResumeSelected(false);setPortSelected(false)}}>Contact Me</span>
            </li>
        </ul>
    </header>
    );
}

export default Nav;