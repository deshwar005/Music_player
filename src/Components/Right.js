import React, { useEffect, useState } from 'react';
import './Right.css';
import Sidemusic from './Sidemusic';
import axios from 'axios';

function Right() {
  const [Songs, setSongs] = useState(null);

  const fetchSongs = async () => {
    const response = await axios.get('https://spoticy-clone.onrender.com/allsongs');
    setSongs(response.data);
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div className="right">
      <div className="right-heading">Yours Friends</div>
      <div className="list-user">
        {Songs?.map((data) => {
          return (
            <Sidemusic
              key={data.id} // Add the unique "key" prop here
              img={data.image}
              songname={data.album}
              author={data.artist}
              song={data.song}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Right;
