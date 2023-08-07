import React , {useEffect,useRef} from 'react';
import './Bottom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import setSongUrl from './Actions';
function Bottom() {
    const dispatch = useDispatch();
    const audioRef = useRef(null);
    const songUrl = useSelector((state) => state.songUrl);
    const imgurl = useSelector((state) => state.imgurl);
    const song_state = useSelector((state) => state.songstate);
    useEffect(()=>{
        if(song_state){
            audioRef.current.pause();
        }else{
            audioRef.current.play();
        }


    },[songUrl,song_state]);

    const pause=()=>{
        dispatch(setSongUrl(songUrl,imgurl,!song_state));
    };
    const play=()=>{
        dispatch(setSongUrl(songUrl,imgurl,!song_state));
    };
    
    return (
        <div className="bottom">
            <div className='poster'>
            <img className='img-poster' src={imgurl} alt='none'/>
            </div>
            <audio className="bg-none" ref={audioRef} src={songUrl} />

            <div className="music-container">
            <FontAwesomeIcon icon={faStepBackward} />
          
        { song_state?<FontAwesomeIcon icon={faPlay} onClick={pause} />:  <FontAwesomeIcon icon={faPause} onClick={play} />}    
            <FontAwesomeIcon icon={faStepForward} />
            </div>
            <div>
            </div>
        </div>
    );
}

export default Bottom;