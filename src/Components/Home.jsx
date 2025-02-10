import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Header from './Header';
import Aboutus from '../Pages/Aboutus';

function Home() {
  const [blinking, setBlinking] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  //blinking
   const handleGetStarted = () => { 
    setBlinking(true); setTimeout(() => setBlinking(false), 2000); // Blinking for 2 seconds
  };
  //darkmode
  const toggleDarkMode = () => { 
    setDarkMode(!darkMode);
   };
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Header blinking={blinking} toggleDarkMode={toggleDarkMode}/>
        <div id='landing' className="row">
          <div className="col-1"></div>
          <div style={{marginTop:"300px"}} className="col-5">
          <div style={{ textAlign: '', padding: '20px', width: '100%', color: '#FFFFFF' }}> <div style={{ fontSize: '66px', fontWeight: 'bold' }}>RoomRentals</div> <p style={{ fontSize: '20px' }}> Welcome to RoomRentals. Whether you're searching for a cozy apartment, a spacious commercial property, or a charming flat, we have diverse listings to suit every budget and lifestyle. </p>
          <Button onClick={handleGetStarted} variant="outline-light">Get Started</Button>
          </div>

          </div>
       
        </div>
        
        <div>
          <Aboutus/>
        </div>
    </div>
  )
}

export default Home