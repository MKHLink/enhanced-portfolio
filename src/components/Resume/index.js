import React from "react";

//h5 has a google drive link to resume
function Resume(){
    return(
        <section>
            <h5>Download my resume <span><a href="https://docs.google.com/document/d/1NT-G4UdPTUUJC16z-e4me-oGSetUAqcx/edit?usp=sharing&ouid=110199622007239098451&rtpof=true&sd=true"
            target="_blank" rel="noreferrer">here</a></span></h5>
            <br />
            <br />

            <h2>Back-End Profeciencies</h2>
            <ul>
                <li>Node JS</li>
                <li>Express JS</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Sequelize</li>
            </ul>

            <h2>Front-End Profeciencies</h2>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Handlebars</li>
            </ul>

            <h2>Other Languages</h2>
            <ul>
                <li>C++</li>
                <li>Java</li>
                <li>Python</li>
            </ul>
        </section>
    );
}

export default Resume;