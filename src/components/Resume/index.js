import React from "react";

function Resume(){
    return(
        <section className="resume">
            <h5>Download my resume <span><a href="https://drive.google.com/file/d/1UI-xn-fqss6I0N4AO-GjxH-R7aN6Kf_V/view?usp=sharing"
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