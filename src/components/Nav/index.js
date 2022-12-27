import React from "react";

function Nav(props){
    
    const {
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected
        } = props;
    
    return (
    <header>
        <h1 className="mx-1">Mohammad Komol Hasan</h1>

        <ul className="flex-row">
            <li className="mx-2">
                <a href="#about" onClick={()=>{setContactSelected(false); setResumeSelected(false)}}>About Me</a>
            </li>

            <li className="mx-2">
                Portfolio
            </li>

            <li className={`mx-2${resumeSelected && 'navActive'}`}>
                <span onClick={()=>{setResumeSelected(true); setContactSelected(false)}}>Resume</span>
            </li>

            <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                <span onClick={()=>{setContactSelected(true);setResumeSelected(false)}}>Contact Me</span>
            </li>
        </ul>
    </header>
    );
}

export default Nav;