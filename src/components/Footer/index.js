import React from "react";

//a simple footer that holds link to github and linkedin
function Footer(){
    return(
        <footer>
            <a href="https://github.com/MKHLink" target="_blank" rel="noreferrer"><span className="mx-2">GitHub</span></a>
            <a href="https://www.linkedin.com/in/likhonhasan312" target="_blank" rel="noreferrer"><span className="mx-2">Linkedin</span></a>
        </footer>
    );
}

export default Footer;