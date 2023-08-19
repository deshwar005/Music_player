import React from 'react';
import './Sidemusic.css';
// import play_img from './img/playimg.svg'
// import pause from './img/pause-solid.svg'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import setSongUrl from './Actions';

function Sidemusic({ img, songname, song, title }) {
    const dispatch = useDispatch();
    const songstate = useSelector((state) => state.songstate);
    const title_playing = useSelector((state) => state.isplaying);

    const playsong = (songUrl, title) => {  
        dispatch(setSongUrl(title, img, songUrl, true));
    };
    const pausesong = (songUrl,title) =>{
        dispatch(setSongUrl(title, img, songUrl, false));
    }
    return (

        <div className="component">
            <div className="img_right"> <img src={img} alt=""></img></div>
            <div className="playing">

                <div className='title'>   {title}</div>
                <div className='author'> {songname}</div>

            </div>
            <div className='playbutton'>
                {/* <img src={songstate &&  title_playing===title  ? pause:play_img}alt="" ></img> */}

                {songstate && title_playing === title ? (<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="40" fill="red" class="bi bi-pause-circle-fill" viewBox="0 0 16 16"  onClick={() => {
                        pausesong(song, title);
                      
                    }}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
</svg>)
                    :
                    (<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="40" fill="red" class="bi bi-play-circle-fill" viewBox="0 0 16 16" onClick={() => {
                        playsong(song, title);
                     
                    }}>
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
                    </svg>)}

            </div>
        </div>

    );
}

export default Sidemusic;