import React, { useEffect, useState } from 'react';
import './Right.css';
import Sidemusic from './Sidemusic';
import axios from 'axios';

const arr=["https://media.tenor.com/q0LOTp2lumIAAAAC/cat-listening-to-music.gif",
"https://media.tenor.com/IZH_k7F9aqcAAAAi/music.gif",
"https://media.tenor.com/9SFSfC2n0lkAAAAC/head-phones-music.gif",
"https://media.tenor.com/NxBsieLL1vMAAAAC/dancing-anirudh-ravichander.gif"];
// Define a simple spinner component
function Spinner() {
  return <div className="spinner">

<svg xmlns="http://www.w3.org/2000/svg"  width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<path transform="translate(30,130)" fill="#e15b64" d="M6.999-2.173c-0.21-1.843-1.216-3.542-2.21-5.061C4.291-7.995,3.814-8.771,3.242-9.477 c-0.389-0.479-0.799-0.955-0.985-1.554c-0.13-0.42,0.033-1.539-0.704-1.467c-0.359,0.035-0.418,0.337-0.471,0.621 c-0.072,0.38,0,0.842,0,1.227c0,4.1,0,8.199,0,12.299c0,1.247,0,2.495,0,3.742c-2.884-1.873-8.377,1.23-8.197,4.705 c0.091,1.754,1.807,2.481,3.362,2.395c1.974-0.108,3.983-1.249,5.113-2.868c1-1.434,0.769-3.163,0.769-4.822 c0-2.398,0-4.797,0-7.195c0-1.72,0-3.439,0-5.159c1.769,2.454,4.472,4.668,4.002,8.037C6.038,1.149,5.681,1.832,5.665,2.494 C5.639,3.53,6.145,2.799,6.343,2.349C6.99,0.875,7.253-0.575,6.999-2.173z">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;0;0.2;0.4;1" values="30 130;30 130;30 50;30 130;30 130;" keySplines="0 0 1 1;0 0.5 0.5 1;0.5 0 1 0.5;0 0 1 1" calcMode="spline" dur="1.7857142857142856s" repeatCount="indefinite" begin="-0.8928571428571428s"></animateTransform>
</path>
<path transform="translate(70,20)" fill="#f47e60" d="M6.999-2.173c-0.21-1.843-1.216-3.542-2.21-5.061C4.291-7.995,3.814-8.771,3.242-9.477 c-0.389-0.479-0.799-0.955-0.985-1.554c-0.13-0.42,0.033-1.539-0.704-1.467c-0.359,0.035-0.418,0.337-0.471,0.621 c-0.072,0.38,0,0.842,0,1.227c0,4.1,0,8.199,0,12.299c0,1.247,0,2.495,0,3.742c-2.884-1.873-8.377,1.23-8.197,4.705 c0.091,1.754,1.807,2.481,3.362,2.395c1.974-0.108,3.983-1.249,5.113-2.868c1-1.434,0.769-3.163,0.769-4.822 c0-2.398,0-4.797,0-7.195c0-1.72,0-3.439,0-5.159c1.769,2.454,4.472,4.668,4.002,8.037C6.038,1.149,5.681,1.832,5.665,2.494 C5.639,3.53,6.145,2.799,6.343,2.349C6.99,0.875,7.253-0.575,6.999-2.173z">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;0.1;0.4;0.7;1" values="70 130;70 130;70 20;70 130;70 130;" keySplines="0 0 1 1;0 0.5 0.5 1;0.5 0 1 0.5;0 0 1 1" calcMode="spline" dur="1.7857142857142856s" repeatCount="indefinite" begin="-0.8928571428571428s"></animateTransform>
</path>
<path transform="translate(40,60)" fill="#f8b26a" d="M10.988-11.314c-0.201-0.914-2.865,0.152-3.31,0.255c-2.865,0.661-5.73,1.322-8.594,1.983 C-1.873-8.855-2.84-8.658-3.791-8.413c-0.481,0.124-0.664,0.217-0.719,0.77c-0.18,1.819,0,3.786,0,5.621c0,2.663,0,5.325,0,7.988 c-2.146-1.278-5.411,0.577-6.269,2.683c-1.074,2.636,1.925,3.462,3.907,2.736c1.954-0.715,3.253-2.269,3.343-4.333 c0.046-1.037,0-2.087,0-3.125c0-1.638,0-3.276,0-4.914c0-0.673,0-1.346,0-2.019c0-0.215-0.116-0.848,0-1.036 c0.17-0.277,1.196-0.348,1.535-0.427c1.425-0.329,2.849-0.657,4.274-0.986c2.579-0.595,5.158-1.19,7.737-1.786 c0,3.284,0,6.569,0,9.853c-1.64-0.977-3.949-0.013-5.2,1.179c-0.958,0.913-1.87,2.579-0.84,3.778 c1.198,1.393,3.567,0.71,4.866-0.135C10.164,6.578,10.936,5.347,11,3.788c0.148-3.605,0-7.245,0-10.853c0-0.415,0-0.829,0-1.244 C11-9.247,11.189-10.396,10.988-11.314z">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;0.3;0.6;0.9;1" values="40 130;40 130;40 60;40 130;40 130;" keySplines="0 0 1 1;0 0.5 0.5 1;0.5 0 1 0.5;0 0 1 1" calcMode="spline" dur="1.7857142857142856s" repeatCount="indefinite" begin="-0.8928571428571428s"></animateTransform>
</path>
<path transform="translate(60,130)" fill="#e15b64" d="M6.999-2.173c-0.21-1.843-1.216-3.542-2.21-5.061C4.291-7.995,3.814-8.771,3.242-9.477 c-0.389-0.479-0.799-0.955-0.985-1.554c-0.13-0.42,0.033-1.539-0.704-1.467c-0.359,0.035-0.418,0.337-0.471,0.621 c-0.072,0.38,0,0.842,0,1.227c0,4.1,0,8.199,0,12.299c0,1.247,0,2.495,0,3.742c-2.884-1.873-8.377,1.23-8.197,4.705 c0.091,1.754,1.807,2.481,3.362,2.395c1.974-0.108,3.983-1.249,5.113-2.868c1-1.434,0.769-3.163,0.769-4.822 c0-2.398,0-4.797,0-7.195c0-1.72,0-3.439,0-5.159c1.769,2.454,4.472,4.668,4.002,8.037C6.038,1.149,5.681,1.832,5.665,2.494 C5.639,3.53,6.145,2.799,6.343,2.349C6.99,0.875,7.253-0.575,6.999-2.173z">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;0.5;0.75;1;1" values="60 130;60 130;60 70;60 130;60 130;" keySplines="0 0 1 1;0 0.5 0.5 1;0.5 0 1 0.5;0 0 1 1" calcMode="spline" dur="1.7857142857142856s" repeatCount="indefinite" begin="-0.8928571428571428s"></animateTransform>
</path>
<path transform="translate(50,130)" fill="#abbd81" d="M10.988-11.314c-0.201-0.914-2.865,0.152-3.31,0.255c-2.865,0.661-5.73,1.322-8.594,1.983 C-1.873-8.855-2.84-8.658-3.791-8.413c-0.481,0.124-0.664,0.217-0.719,0.77c-0.18,1.819,0,3.786,0,5.621c0,2.663,0,5.325,0,7.988 c-2.146-1.278-5.411,0.577-6.269,2.683c-1.074,2.636,1.925,3.462,3.907,2.736c1.954-0.715,3.253-2.269,3.343-4.333 c0.046-1.037,0-2.087,0-3.125c0-1.638,0-3.276,0-4.914c0-0.673,0-1.346,0-2.019c0-0.215-0.116-0.848,0-1.036 c0.17-0.277,1.196-0.348,1.535-0.427c1.425-0.329,2.849-0.657,4.274-0.986c2.579-0.595,5.158-1.19,7.737-1.786 c0,3.284,0,6.569,0,9.853c-1.64-0.977-3.949-0.013-5.2,1.179c-0.958,0.913-1.87,2.579-0.84,3.778 c1.198,1.393,3.567,0.71,4.866-0.135C10.164,6.578,10.936,5.347,11,3.788c0.148-3.605,0-7.245,0-10.853c0-0.415,0-0.829,0-1.244 C11-9.247,11.189-10.396,10.988-11.314z">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;0;0.4;0.8;1" values="50 130;50 130;50 20;50 130;50 130;" keySplines="0 0 1 1;0 0.5 0.5 1;0.5 0 1 0.5;0 0 1 1" calcMode="spline" dur="1.7857142857142856s" repeatCount="indefinite" begin="0s"></animateTransform>
</path>
</svg>
  </div>;
}

function Right() {
  var i=0;
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const fetchSongs = async () => {
    try {
      const response = await axios.get('https://spoticy-clone.onrender.com/allsongs');
       setSongs(response.data);
      setIsLoading(false); // Data has been fetched, set isLoading to false
    } catch (error) {
      console.error('Errtrueor fetching data:', error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (

    <div className="right">
      <div className="right-heading">Yours Friends</div>
      <div className="list-user">
        {isLoading ? (
          <Spinner /> // Display spinner while loading
        ) : (
          songs.map((data) => (
            <Sidemusic
              key={i++}
              img={data.image}
              songname={data.album}
              title={data.title}
              author={data.artist}
              song={data.song}
              songlist={songs}
            />
          ))
        )}
      </div>
      <div className='gif-animation' >

        <img src={arr[Math.floor(Math.random()*(arr.length))]}>
        </img>
      </div>

    </div>
    
  );
}

export default Right;
