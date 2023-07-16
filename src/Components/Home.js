import React from 'react';
import './Home.css'
import Left from './Left';
import Right from './Right';
import Bottom from './Bottom';
import Header from './Header';
function Home() {
    return (
        <div className='main'>
         <div className="container">
         <Left className="left"/>
         
        <Header/>
        <Right/>

        </div>
        
        <Bottom/>
        </div>
     
    );
}

export default Home;