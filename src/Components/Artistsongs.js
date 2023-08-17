import React from 'react';
import './Artistsongs.css';
const artistsongs = (props) => {
    return (
        <div className='artistsong'>
            
            {/* <td>{props.songname}</td> <td>{props.title}</td> <td>{props.author}</td> <td>{props.author}</td> */}


            <div className='sub_song'>
             <div className='number'>
               {props.id}
             </div>
             <div  className='img'>
                <img src={props.img} alt=''></img>
             </div>
           <p>{props.title}</p> 
            </div>
            <div className='sub_section'>
           <p>{props.author}</p> 
            </div>            
            <div className='sub_section'>
           <p>{props.songname}</p>  
            </div>            
            <div className='sub_duration'>
          <p>{props.duration}</p>  
            </div>
           
        </div>
    );
};

export default artistsongs;