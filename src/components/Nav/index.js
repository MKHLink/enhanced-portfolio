import React from "react";

function Nav(){
    return (
    <header>
        <h1 className="mx-1">Mohammad Komol Hasan</h1>

        <ul className="flex-row">
            <li className="mx-2">
                <a href="#about">About Me</a>
            </li>

            <li className="mx-2">
                Portfolio
            </li>

            <li className="mx-2">
                Resume
            </li>

            <li className="mx-2">
                Contact
            </li>
        </ul>
    </header>
    );
}

export default Nav;