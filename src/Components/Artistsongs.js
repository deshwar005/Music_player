import React from 'react';
import './Artistsongs.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import setSongdetail from './Actions';

const Artistsongs = (props) => {

  const dispatch = useDispatch();
  const states = useSelector((state) => state);

  const play = () =>{
    console.log(props.songurl);
    if(states.isplaying && props.title!==states.songname ){
        dispatch(setSongdetail(props.title,props.author,props.img, props.songurl,true ));
    }else{
        dispatch(setSongdetail(props.title,props.author,props.img, props.songurl,!states.isplaying ));
    }
   
}

    return (
        <div className='artistsong' onClick={()=>{
          play();
      }}>
            
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

export default Artistsongs;