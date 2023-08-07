import React,{useState} from 'react';
import './Sidemusic.css';
import play_img from './img/playimg.svg'
import pause from './img/pause-solid.svg'
import { useDispatch } from 'react-redux';
import setSongUrl from './Actions';

function Sidemusic({img,songname,author,song}) {
    const [Playing,SetPlaying]= useState(false);
    const dispatch = useDispatch();
    var default_state=0;

    const onSetSongUrl = (songUrl) => {
        dispatch(setSongUrl(songUrl,img,Playing,'active'));
      };
    return (

        <div className="component">
        <div className="img_right"> <img src={img}alt=""></img></div>
        <div className="playing">
            <div className='title'>   {songname}</div>
            <div className='author'> {author}</div>
     
        </div>
        <div className='playbutton'>
        <img src={Playing?pause:play_img}alt="" onClick={()=>{ 
            onSetSongUrl(song);
            SetPlaying(!Playing);
            }}></img>
        </div>
        </div>
    
    );
}

export default Sidemusic;