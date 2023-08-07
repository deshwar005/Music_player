import React from 'react';
import './Home.css'
import Left from './Left';
import Right from './Right';
import Bottom from './Bottom';
import Header from './Header';
import { useSelector } from 'react-redux';
function Home() {
    var default_state= useSelector((state) => state.isplaying);
    return (
        <div className='main'>
         <div className="container">
         <Left className="left"/>
         
        <Header/>
        <Right/>

        </div>
       {default_state==='active'?<Bottom/>:''} 
       
        </div>
     
    );
}

export default Home;