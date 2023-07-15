import React,{useState} from 'react';
import './Sidemusic.css';
import play_img from './img/playimg.svg'
import { useDispatch } from 'react-redux';
import setSongUrl from './Actions';
import { useSelector } from 'react-redux';

function Sidemusic({img,songname,author,song}) {

    const dispatch = useDispatch();
    const songUrl = useSelector((state) => state.songUrl);
    const onSetSongUrl = (songUrl) => {
        dispatch(setSongUrl(songUrl));
      };
    return (

        <div className="component">
        <div className="img_right"> <img src={img}alt=""></img></div>
        <div className="playing">
            <div className='title'>   {songname}</div>
            <div className='author'> {author}</div>
     
        </div>
        <div className='playbutton'>
        <img src={play_img}alt="" onClick={()=>{ 
            onSetSongUrl(song);
            }}></img>
        </div>
        </div>
    
    );
}

export default Sidemusic;