import React, { useState, useEffect } from 'react';
import './Home.css';
import Left from './Left';
import Right from './Right';
import Bottom from './Bottom';
import Header from './Header';
import Artistlist from './Artistlist';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const artistPathPattern = /^\/artist\//;

  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    if (artistPathPattern.test(location.pathname)) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]); // Include location.pathname here

  return (
    <div className='main'>
      <div className="containers">
        <Left className="left" />
        {showHeader ? <Header /> : <Artistlist />}
        <Right />
      </div>
      <Bottom />
    </div>
  );
}

export default Home;
