import React , {useEffect,useState} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './Bottom.css';
import { useSelector } from 'react-redux';
function Bottom(props) {
    const songUrl = useSelector((state) => state.songUrl);
    useEffect(()=>{
        console.log(songUrl);

    },[songUrl]);
    return (
        <div className="bottom">
        <ReactAudioPlayer
        src={songUrl}
        autoPlay
        controls
        />
        </div>
    );
}

export default Bottom;