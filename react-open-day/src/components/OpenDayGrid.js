import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import EventsAndNews from "./EventsAndNews";
import SupportingYou from "./SupportingYou";
import BusinessEngagement from "./BusinessEngagement";
import StudyWithUs from "./StudyWithUs";
import UniversityLinks from "./UniversityLinks";
import ContactUs from "./ContactUs";
import ApplyNow from "./ApplyNow";

class OpenDayGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedArea: "",
      applicantName: ""
    };
  }

  EventsAndNews= (e) => {
    e.preventDefault();
    //alert("Section on Events and News");
    this.setState({ selectedArea: "eventsAndNews" });
    console.log("area:" + this.state.selectedArea);
  };
  SupportingYou = () => {
    //alert("Section on Supporting You");
    this.setState({ selectedArea: "supportingYou" });
    console.log("area:" + this.state.selectedArea);
  };
  BusinessEngagement = () => {
    //alert("Section on Business Engagement");
    this.setState({ selectedArea: "businessEngagement" });
    console.log("area:" + this.state.selectedArea);
  };
  StudyWithUs = () => {
    //alert("Section on Study With Us");
    this.setState({ selectedArea: "studyWithUs" });
    console.log("area:" + this.state.selectedArea);
  };
  UniversityLinks = () => {
    //alert("Section on University Links ");
    this.setState({ selectedArea: "universityLinks" });
    console.log("area:" + this.state.selectedArea);
  };
  ContactUs = () => {
    //alert("Section on Contact Us");
    this.setState({ selectedArea: "contactUs" });
    console.log("area:" + this.state.selectedArea);
  };
  ApplyNow= () => {
    //alert("Section on Apply Now");
    this.setState({ selectedArea: "applyNow" });
    console.log("area:" + this.state.selectedArea);
  };
  changeName = (evt) => {
    evt.preventDefault();
    this.setState({ applicantName: evt.target.value });
    console.log("name:" + this.state.applicantName);
  };
  render() {
    const imageStyle = {
      width: "1000px"
      
    };
    return (
      <Container>
        <Row>
          <Col className="App-inner">
            <p>
             <br/>
              <form onSubmit={e => { e.preventDefault(); }}>Enter your Name:
                <input type="text" onChange={this.changeName}/>
              </form>
              
            </p>
          
          
            <img
              src={require("../Website Assests/Virtual OpenDay tour OUTLINE.jpg")}
              usemap="#Virtual OpenDay tour OUTLINE"
              alt="OpenDay"
              style={imageStyle}
            />
            <map name="Virtual OpenDay tour OUTLINE">
              <area
                shape="rect"
                coords="238,56,377,137"
                alt="TV"
                onClick={this.EventsAndNews}
                href="#"
              />
              <area
                shape="rect"
                coords="380,158,648,183"
                alt="YellowTable"
                onClick={this.SupportingYou}
                href="#"
              />
              <area
                shape="rect"
                coords="924,235,1087,587"
                alt="RedTable"
                onClick={this.BusinessEngagement}
                href="#"
              />
              <area
                shape="rect"
                coords="208,583,369,668"
                alt="RedTable"
                onClick={this.StudyWithUs}
                href="#"
                
              />
              <area
                shape="rect"
                coords="426,577,584,663"
                alt="RedTable"
                onClick={this.UniversityLinks}
                href="#"
                
              />
               <area
                shape="rect"
                coords="645,574,801,666"
                alt="RedTable"
                onClick={this.ContactUs}
                href="#"
                
              />
               <area
                shape="rect"
                coords="860,577,1017,666"
                alt="RedTable"
                onClick={this.ApplyNow}
                href="#"
                
              />
              
            </map>
          </Col>
          
        </Row>
        <Row>
          
          <Col>
            {this.state.selectedArea === "eventsAndNews" ? (
              <div>
                <EventsAndNews/>
              </div>
            ) : this.state.selectedArea === "supportingYou" ? (
              <div>
                <SupportingYou/>
              </div>
            ) : this.state.selectedArea === "businessEngagement" ? (
              <div>
                <BusinessEngagement />
              </div>
              ) : this.state.selectedArea === "universityLinks" ? (
                <div>
                  <UniversityLinks/>
                </div>
                ) : this.state.selectedArea === "contactUs" ? (
                  <div>
                    <ContactUs />
                  </div>
                  ) : this.state.selectedArea === "applyNow" ? (
                    <div>
                      <ApplyNow/>
                    </div>
            ) : (
              <h1>Click On The Image Above To Find Out More</h1>
            )}
          </Col>
         
        </Row>
      </Container>
    );
  }
}
export default OpenDayGrid;