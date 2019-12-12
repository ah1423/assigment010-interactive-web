import React from 'react';
import './App.css';
import Nav from './components/Nav'
import OpenDayGrid from './components/OpenDayGrid'
import BusinessEngagment from './components/BusinessEngagement';
import ContactUs from './components/ContactUs';


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
      </header>
      
    </div>
  );
}

export default App;
