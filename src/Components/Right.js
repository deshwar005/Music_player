import React ,{useEffect,useState} from 'react';
import './Right.css';
import Sidemusic from './Sidemusic';
import axios from 'axios';
function Right() {
  const [Songs,setSongs] = useState(null);
  const fetchsongs = async ()=>{
   const response = await axios.get('https://spoticy-clone.onrender.com/allsongs');
   console.log(response.data);
   setSongs(response.data);
  };

  useEffect(()=>{
    fetchsongs();
  },[]);
    return (
             <div className="right">
              <div className="right-heading">
                Yours Friends</div>
                <div className="list-user">

                  {Songs?.map((data)=>{
                    return(
                    
                      <Sidemusic key={data.id} img={data.image}  songname={data.album} author={data.artist}  song={data.song}/>
                    );
                  })}
               

              </div>
            </div>
            
    );
}

export default Right;