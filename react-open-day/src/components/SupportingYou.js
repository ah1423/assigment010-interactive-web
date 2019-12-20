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
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
      Financial Support
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
    <p>Within this page you can find useful information that may help you manage your finances whilst you are at University. If you are struggling financially, please speak to one of our Student Support Team to discuss the support available to you.  </p>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
      Student Accommodation
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
      <h3>Taverners Hall</h3>
    <p> For many, university life starts in student accommodation as it is convenient, cost effective and a great way to meet and make new friends, and perfect for getting your head down.</p>
      <p>Taverners Hall at University Court is managed independently from UCP and located within walking distance to our Park Crescent campus.</p>
      <li>2 and 5 bedroom flats</li>
      <li>En-suite rooms</li>
      <li>Free Wi-Fi</li>
      <li>Laundry facilities</li>
      <li>Safe and secure</li>
      <li>Single sex flats available</li>
      <p>The accommodation complex consists of 54 student bedrooms, set in a combination of two and five bedroom flats across four separate blocks. On the ground floor, two flats at University Court have been designed to suit students with particular needs.</p>
    <p>Each flat has a communal kitchen/lounge with sofas, making it a great space for relaxing with friends. They are fully equipped with a range of kitchen units and appliances including cooker, fridge, freezer and microwave. Laundry facilities are available which serve the entire complex.</p>
      <p>Each of the bedrooms is fully equipped with an en-suite shower room, private study area, bed, storage and shelving.</p>
      <p>The accommodation offers a safe environment for students to enjoy university life. Access to the accommodation is via electronic gates and is located in a well-lit, secure landscaped grounds covered by CCTV with 24 hour emergency call out. A secure cycle store is provided and limited car parking is available at less than £1 per day.</p>
     <p>Rooms can be rented for 43 or 51 weeks per year from £95 per week (price correct for 2018/19) and is fully inclusive of utility bills and wi-fi.</p>
     
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
      Mature Students and Students with Dependents
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
    <p>Whatever your status as a student at UCP you will not be alone. 36% of our current students are ‘mature’ students (aged 25+) alongside thriving and growing group of students who have continued their academic path straight from their further education. </p>
     <p>We also have those who are returning to education to enhance careers and build up their professional development portfolio often being sponsored by their employer.</p>
     <p>We understand that one of the main worries mature students have is that they won’t be eligible to study for a degree. A great number of UCP students are those who have returned to university along a non-traditional route but have life or professional experience. Applicants who do not qualify through standard academic routes are welcome to contact us to discuss admission based on previous qualifications and experience.</p>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
   
  );
};

export default SupportingYou;