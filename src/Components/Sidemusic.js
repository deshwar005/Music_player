import React from 'react';
import './Sidemusic.css';
import play_img from './img/playimg.svg'
function Sidemusic({img,songname,author}) {
    return (

         <div className="component">
        <div className="img_right"> <img src={img}alt=""></img></div>
        <div className="playing">
            <div className='title'>   {songname}</div>
            <div className='author'> {author}</div>
     
        </div>
        <div className='playbutton'>
        <img src={play_img}alt=""></img>
        </div>
        </div>
    
    );
}

export default Sidemusic;