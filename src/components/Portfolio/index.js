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
                    <a href="https://mkhlink.github.io/Find_Your_Pet/" target="_blank" rel="noreferrer">
                    <img src ={Stock} alt="pet-pics"/>
                    <h3>Find-Your-Pet
                    <br />
                    Javascript/Tailwind/3rd Party APIs'
                    </h3>
                    </a>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={4} lg={2} xl={2}>
                        <a href="https://github.com/MKHLink/Office_task_tracker" target="_blank" rel="noreferrer">
                        <img src={Manager} style={{width:"50%"}} alt="dashboard"/>
                        <h3 >OnlyTasks
                        <br />
                        JavaScript, Sequelize, Handlebars, Express JS, HTML, CSS
                        </h3>
                        </a>
                    </Col>
                    <Col xs={6} md={4} lg={2} xl={2}>
                        <a href="https://github.com/MKHLink/DatabaseReopProject" target="_blank" rel="noreferrer">
                        <img src={Database} alt="visuals of database"/>
                        <h3>Database Application
                        <br />
                        Java/mySQL
                        </h3>
                        </a>
                    </Col>
                    <Col xs={6} md={4} lg={2} xl={2}>
                        <a href="https://github.com/MKHLink/BankAccountApplication" target="_blank" rel="noreferrer">
                        <img src={Bank} alt="Bank"/>
                        <h3 >Bank Account Application
                        <br />
                        C++
                        </h3>
                        </a>
                    </Col>
                    <Col xs={6} md={4} lg={2} xl={2}>
                        <a href="https://github.com/MKHLink/Calculator_With_GUI" target="_blank" rel="noreferrer">
                        <img src={Calculator} alt="calculator"/>
                        <h3 >Calculator App
                        <br/>
                        Java
                        </h3>
                        </a>
                    </Col>
                    <Col xs={6} md={4} lg={2} xl={2}>
                        <a href="https://github.com/MKHLink/CustomerAccountCreation" target="_blank" rel="noreferrer">
                        <img src={Customer} alt="customer"/>
                        <h3>Customer Account Creation App
                        <br />
                        Java
                        </h3>
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Portfolio;