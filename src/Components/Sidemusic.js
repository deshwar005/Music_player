import React from 'react';
import './Sidemusic.css';
function Sidemusic({img,songname,author}) {
    return (

         <div className="component">
        <div className="img"> <img src={img}alt=""></img></div>
        <div className="playing">
            <div className='title'>   {songname}</div>
            <div className='author'> {author}</div>
     
        </div>
        </div>
    
    );
}

export default Sidemusic;