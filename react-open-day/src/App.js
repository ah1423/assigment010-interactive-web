import React from 'react';
import './App.css';
import Nav from './components/Nav'
import OpenDayGrid from './components/OpenDayGrid'
import BusinessEngagment from './components/BusinessEngagement';
import ContactUs from './components/ContactUs';
import ApplyNow from './components/ApplyNow';
import EventsAndNews from './components/EventsAndNews';
import StudyWithUs from './components/StudyWithUs';
import UniversityLinks from './components/UniversityLinks';





function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <Nav/>
        <br/>
        <OpenDayGrid/>
        <br/>
        <BusinessEngagment/>
        <br/>
        <ContactUs/>
        <br/>
        <ApplyNow/>
        <br/>
        <EventsAndNews/>
        <br/>
        <StudyWithUs/>
        <br/>
        <UniversityLinks/>
        <br/>
        
        
        
      </header>
      
    </div>
  );
}

export default App;
