import React from "react";
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'



export const SupportingYou = () => {

  return (
<Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Accademic Support
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
          
          <p>We have a central Student Support team to advise and guide you on issues relating to a range of academic issues which you may experience during your university life due to unforeseen circumstances such as illness, bereavement, employment or relationship breakdowns. </p>
          <p>Your circumstances may impact on your assessments and/or attendance, we are here to help support you through these difficult times and provide you with the relevant support and guidance with understanding University Regulations and implications that may occur. </p>
        
      </Card.Body>
    
    </Accordion.Collapse>
  </Card>
  
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Welfare Support
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
    <p>We offer a wide range of services to support your health and wellbeing during your studies. Speak to a member of our Student Support Team to access any advice or discuss any concerns you may be experiencing. We are here to listen, help and support you with both your academic life and wellbeing. There are some services we do not offer on-site, but can assist you in accessing other specialist services that you may need. </p>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
   
  );
};

export default SupportingYou;