import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Bank from "../../Assets/ProjectsPic/Bank.jpg";
import Calculator from "../../Assets/ProjectsPic/calculator.jpg";
import Customer from "../../Assets/ProjectsPic/customer.jpg";
import Database from "../../Assets/ProjectsPic/database.jpg";
import Manager from "../../Assets/ProjectsPic/manager.png";
import Stock from "../../Assets/ProjectsPic/stock.jpg";

function Portfolio(){
    return(
        <section>
            <Container fluid="md">
                <Row>
                    <Col>
                    <a href="https://mkhlink.github.io/Find_Your_Pet/">
                    <img src ={Stock} alt="pet-pics"/>
                    <h3>Find-Your-Pet
                    <br />
                    Javascript/Tailwind/3rd Party APIs'
                    </h3>
                    </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a href="https://github.com/MKHLink/Office_task_tracker">
                        <img src={Manager} alt="dashboard image"/>
                        <h3>OnlyTasks
                        <br />
                        JavaScript, Sequelize, Handlebars, Express JS, HTML, CSS
                        </h3>
                        </a>
                    </Col>
                    <Col>
                    <a></a>
                    <img/>
                    <h3></h3>
                    <h4></h4>
                    </Col>
                    <Col>
                    <a></a>
                    <img/>
                    <h3></h3>
                    <h4></h4>
                    </Col>
                    <Col>
                    <a></a>
                    <img/>
                    <h3></h3>
                    <h4></h4>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Portfolio;