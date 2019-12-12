import React from "react";
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'



export const StudyWithUs = () => {

  return (
<Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Peterborough Community
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>For those moving to Peterborough we have a good network of student support ranging from the academic to extra-curricular. Numerous societies and activities ensure University Centre Peterborough is a hub of activity and opportunity. Our Sports Council supports competitive and recreational sports. </Card.Body>
    
    </Accordion.Collapse>
  </Card>
  
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
       Employability
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Employability has been another area we have developed at UCP. We have forged excellent working relationships with companies such as, BGL, Enterprise International and Western Union as well as numerous third sector organisations such as the Heritage Lottery Fund. Local schools are employing students prior to graduation as Academic Mentors.</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
   
  );
};

export default StudyWithUs;