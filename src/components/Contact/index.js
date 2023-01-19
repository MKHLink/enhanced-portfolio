import React from "react";

import Card from 'react-bootstrap/card';

function Contact(){

      return (
        <main>
          <Card className="card" style={{ width: '25rem' }}>
          <Card.Body>
            <Card.Title>Have a question?</Card.Title>
            
            <Card.Text>
            Let's get to know each other. How can I be useful to your service?
Please feel free to reach out to me. I would be delighted to answer all your questions or concerns.
            </Card.Text>
            <Card.Link href="mailto: likhon.hasan312@gmail.com">Email</Card.Link>
            <Card.Link href="https://www.linkedin.com/in/likhonhasan312/">LinkedIn</Card.Link>
          </Card.Body>
        </Card>
        
        </main>
      );
    }

export default Contact;