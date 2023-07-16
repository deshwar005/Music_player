import React , {useEffect,useRef} from 'react';
import './Bottom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
function Bottom() {
    const audioRef = useRef(null);
    const songUrl = useSelector((state) => state.songUrl);
    const imgurl = useSelector((state) => state.imgurl);
    const song_state = useSelector((state) => state.songstate);
    useEffect(()=>{
        console.log(song_state);
        if(song_state){
            audioRef.current.pause();
        }else{
            audioRef.current.play();
        }
        

    },[songUrl,song_state]);

    
    return (
        <div className="bottom">
            <div className='poster'>
            <img className='img-poster' src={imgurl} alt='none'/>
            </div>
            <audio className="bg-none" ref={audioRef} src={songUrl} />

            <div className="music-container">
            <FontAwesomeIcon icon={faStepBackward} />
          
        { song_state?<FontAwesomeIcon icon={faPlay} />:  <FontAwesomeIcon icon={faPause} />}    
            <FontAwesomeIcon icon={faStepForward} />
            </div>
            <div>
            </div>
        </div>
    );
}

export default Bottom;