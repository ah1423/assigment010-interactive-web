import React from "react";
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'



export const UniversityLinks = () => {

  return (
<Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Anglia Ruskin University
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
          <h3>Anglia Ruskin is a modern, global university. Each year, 39,000 individuals from 177 countries gain qualifications with us in four continents.</h3>
          <p>As one of the largest universities in the east of England, with five faculties and five research institutes, we’re home to a thriving community of people keen to get on, led by inspiring, award-winning tutors.</p>
          <p>Our main campuses are based in three vibrant cities, Cambridge, Chelmsford and Peterborough, and Anglia Ruskin makes it easy for you to study close to where you live thanks to our network of academic partnerships. In 2008 we started a joint venture with Peterborough Regional College to create University Centre Peterborough (UCP). UCP offers a broad portfolio of degree courses which are validated by Anglia Ruskin University.</p>
        <h6>UNIVERSITY
COURSES</h6>
<p>We offer a wide range of exciting undergraduate and postgraduate degree courses - many of these are recognised by industry, with a large number being professionally accredited. Our lecturers are rated among the most enthusiastic and interesting in country and our courses among the most intellectually stimulating *. Anglia Ruskin has also been recognised for its academic excellence by the UK’s Higher Education Funding bodies, with 12 areas classed as generating world-leading research **.</p>
<p>All of our courses are developed with future employability in mind, and our students benefit from support in finding work placement and volunteering opportunities as well as from practical advice and skills workshops run by Faculty Employability Advisers at our three main campuses. We have close partnerships with local, national and international businesses – each year we support some 2,000 businesses, which are always looking for bright, talented people. It’s no wonder 9 out of 10 of our students report being in work or further study within six months of graduating ***.</p>
<p>Our courses ensure that you benefit from both the theory and practical skills you will learn whilst you are here, giving you the edge whether you progress onto higher education, into employment or climb the career ladder within your current employment</p>
  <p>Our tutors are professional within their subject areas and have years of experience within their industry. They are committed to supporting you in achieving your chosen pathway and will work with you to ensure you are equipped with the skills and qualifications to allow you to succeed.</p>    
      </Card.Body>
    
    </Accordion.Collapse>
  </Card>
  
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Peterborough Regional College
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
    <p>Our courses will provide you with the necessary tools, experience, knowledge and qualifications to enable you to pursue your chosen career path. This will all be supported by our industry specialist tutors and taught in our first class facilities.</p>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
   
  );
};

export default UniversityLinks;