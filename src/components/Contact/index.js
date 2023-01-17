import React from "react";

import Card from 'react-bootstrap/card';

function Contact(){

      return (
        <main>
          <Card className="card" style={{ width: '25rem' }}>
          <Card.Body>
            <Card.Title>Contact Links</Card.Title>
            
            <Card.Text>
            Thank you for taking the time to look at my portfolio, you can contact me via the links below.
            </Card.Text>
            <Card.Link href="mailto: likhon.hasan312@gmail.com">Email</Card.Link>
            <Card.Link href="https://www.linkedin.com/in/likhonhasan312/">LinkedIn</Card.Link>
          </Card.Body>
        </Card>
        
        </main>
      );
    }

export default Contact;