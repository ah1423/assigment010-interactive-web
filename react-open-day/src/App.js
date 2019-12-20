import React from 'react';
import './App.css';
import Nav from './components/Nav'
import OpenDayGrid from './components/OpenDayGrid'






function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <Nav/>
        <br/>
        <OpenDayGrid/>
        <br/>

      </header>
      
    </div>
  );
}

export default App;
