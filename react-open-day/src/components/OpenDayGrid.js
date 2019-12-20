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
      openDayChoice: "",
      applicantName: ""
    };
  }

  EventsAndNews = e => {
    e.preventDefault();
    //alert("Section on Events and News");
    this.setState({ openDayChoice: "eventsAndNews" });
    console.log("area:" + this.state.openDayChoice);
  };
  SupportingYou = () => {
    //alert("Section on Supporting You");
    this.setState({ openDayChoice: "supportingYou" });
    console.log("area:" + this.state.openDayChoice);
  };
  BusinessEngagement = () => {
    //alert("Section on Business Engagement");
    this.setState({ openDayChoice: "businessEngagement" });
    console.log("area:" + this.state.openDayChoice);
  };
  StudyWithUs = () => {
    //alert("Section on Study With Us");
    this.setState({ openDayChoice: "studyWithUs" });
    console.log("area:" + this.state.openDayChoice);
  };
  UniversityLinks = () => {
    //alert("Section on University Links ");
    this.setState({ openDayChoice: "universityLinks" });
    console.log("area:" + this.state.openDayChoice);
  };
  ContactUs = () => {
    //alert("Section on Contact Us");
    this.setState({ openDayChoice: "contactUs" });
    console.log("area:" + this.state.openDayChoice);
  };
  ApplyNow = () => {
    //alert("Section on Apply Now");
    this.setState({ openDayChoice: "applyNow" });
    console.log("area:" + this.state.openDayChoice);
  };
  changeName = evt => {
    evt.preventDefault();
    this.setState({ openDayChoice: evt.target.value });
    console.log("name:" + this.state.applicantName);
  };
  render() {
    
    return (
      <Container>
        <Row>
          <Col className="App-inner">
            <p>
              <br />
              <form
                onSubmit={e => {
                  e.preventDefault();
                }}
              >
                Enter your Name:
                <input type="text" onChange={this.changeName} />
              </form>
            </p>
            <p> Hi Abi, Welcome to University Centre Peterborough.</p>

            <img
              src={require("../Website Assests/Virtual OpenDay tour OUTLINE.jpg")}
              useMap="#Virtual OpenDay tour OUTLINE"
              alt="OpenDay"
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
          {this.state.openDayChoice === "eventsAndNews" ? (
              <div>
                <EventsAndNews />
              </div>
            ) : this.state.openDayChoice === "supportingYou" ? (
              <div>
                <SupportingYou />
              </div>
            ) : this.state.openDayChoice === "businessEngagement" ? (
              <div>
                <BusinessEngagement />
              </div>
            ) : this.state.openDayChoice === "universityLinks" ? (
              <div>
                <UniversityLinks />
              </div>
            ) : this.state.openDayChoice === "contactUs" ? (
              <div>
                <ContactUs />
              </div>
            ) : this.state.openDayChoice === "applyNow" ? (
              <div>
                <ApplyNow />
              </div>
            ) : this.state.openDayChoice === "studyWithUs" ? (
              <div>
                <StudyWithUs />
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
