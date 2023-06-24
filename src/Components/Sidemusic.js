import React from 'react';
import './Sidemusic.css';
function Sidemusic({img,songname}) {
    return (

         <div className="component">
        <div className="img"> <img src={img}alt=""></img></div>
        <div className="playing">
        {songname}
        </div>
        </div>
    
    );
}

export default Sidemusic;