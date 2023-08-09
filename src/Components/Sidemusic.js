import React,{useState} from 'react';
import './Sidemusic.css';
import play_img from './img/playimg.svg'
import pause from './img/pause-solid.svg'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import setSongUrl from './Actions';

function Sidemusic({img,songname,song,title}) {
    const [Playing,SetPlaying]= useState(false);
    const dispatch = useDispatch();
    const songstate = useSelector((state) => state.songstate);
    const title_playing = useSelector((state) => state.isplaying);

    const onSetSongUrl = (songUrl,title) => {
        dispatch(setSongUrl(title,img,songUrl,Playing));
      };
    return (

        <div className="component">
        <div className="img_right"> <img src={img}alt=""></img></div>
        <div className="playing">

            <div className='title'>   {title}</div>
            <div className='author'> {songname}</div>
     
        </div>
        <div className='playbutton'>
        <img src={songstate &&  title_playing==title  ?pause:play_img}alt="" onClick={()=>{ 
            onSetSongUrl(song,title);
            SetPlaying(!Playing);
            }}></img>
        </div>
        </div>
    
    );
}

export default Sidemusic;