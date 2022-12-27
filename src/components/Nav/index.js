import React from "react";

function Nav(props){
    
    const {contactSelected, setContactSelected} =
     props;
    
    return (
    <header>
        <h1 className="mx-1">Mohammad Komol Hasan</h1>

        <ul className="flex-row">
            <li className="mx-2">
                <a href="#about" onClick={()=>setContactSelected(false)}>About Me</a>
            </li>

            <li className="mx-2">
                Portfolio
            </li>

            <li className="mx-2">
                Resume
            </li>

            <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                <span onClick={(()=>setContactSelected(true))}>Contact Me</span>
            </li>
        </ul>
    </header>
    );
}

export default Nav;