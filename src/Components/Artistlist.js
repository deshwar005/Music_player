import React, { useEffect, useState } from 'react';
import './Header.css';
import setting_icon from './img/setting.png';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import Sidemusic from './Sidemusic';

function Artistlist() {
    const [songs, setSongs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
    const [ dropdown, Setdropdown]=useState(false);
    const display_dropdown =()=>{
        Setdropdown(!dropdown)
    };

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
    console.log(songs);
  }, []);

    return (
        <div>
            <div className='new_header'>
                <div className='profile'>
                    {isAuthenticated ? (
                        <img src={user.picture} alt={user.name}></img>) : (<svg xmlns="http://www.w3.org/2000/svg"

                            width="100%" height="100%" fill="white" class="bi bi-person-square " viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                        </svg>)}
                </div>
                <div className='name'>
                    {isAuthenticated ? (
                        <span><b>{user.given_name}</b></span>
                    ) : (
                        <span><b onClick={() => loginWithRedirect()}>Click here to Login</b></span>
                    )}
                </div>
                <div className='search'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10%" height="16" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16">
                        <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" fill="red" />
                        <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
                    </svg>
                    <input type="text" placeholder='What do you want ?' ></input>

                </div>
                <div className='settings action'>
                    <img src={setting_icon} alt='' onClick={display_dropdown} ></img>
                    {isAuthenticated ? (
                    <div className={`menu ${dropdown ? "active" : ""}`}>
                        <h3>{user.name}<br /><span>{user.given_name}</span></h3>
                        <ul>
                            <li>
                            <img src=""  alt=''/>My profile
                            </li>
                            <li>
                            <img src=""  alt=''/>Discover
                            </li>
                            <li>
                            <img src=""  alt=''/>Favorite
                            </li>
                            <li>
                            <img src=""  alt=''/>Settings
                            </li>
                            <li>
                            <div  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</div>
                            </li>
                        </ul>
                    </div>):('')}
                </div>
            </div>

            <div className='bg-dark'>
            <div className='atd'>
                <div className='atid'>
                Anirudh Ravichander
                </div>

            </div>
            <div className="artist-songs">
        {isLoading ? (
            <h1 style={{
                "width": "100%",
                "display": "flex",
                "align-items": "center",
                "justify-content": "center"
            }}>loading...</h1>
        ) : (
          songs.map((data) => (
            <Sidemusic
              key={data.id}
              img={data.image}
              songname={data.album}
              title={data.title}
              author={data.artist}
              song={data.song}
            />
          ))
        )}
      </div>

        </div>
        </div>
    );
}

export default Artistlist;