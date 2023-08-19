import React, { useState, useEffect } from 'react';
import './Home.css';
import Left from './Left';
import Right from './Right';
import Bottom from './Bottom';
import Header from './Header';
import Artistlist from './Artistlist';
import { useLocation } from 'react-router-dom'; // Import useLocation from React Router

function Home() {
  const location = useLocation(); // Get the current location
  const artistPathPattern = /^\/artist\//;

  const [showHeader, setShowHeader] = useState(true);



  useEffect(() => {

    if (artistPathPattern.test(location.pathname)) {
      setShowHeader(false); // Hide the header if the artist path is matched
    } else {
      setShowHeader(true); // Show the header for other paths
    }
  }, [location.pathname]);

  return (
    <div className='main'>
      <div className="container">
        <Left className="left" />
        {showHeader ? <Header /> : <Artistlist />}
        <Right />
      </div>
      <Bottom />
    </div>
  );
}

export default Home;
