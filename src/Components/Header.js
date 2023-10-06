import React,{useState} from 'react';
import './Header.css';
import setting_icon from './img/setting.png';
import { useAuth0 } from "@auth0/auth0-react";
import Artist from './Artist';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
    const [ dropdown, Setdropdown]=useState(false);
    const display_dropdown =()=>{
        Setdropdown(!dropdown)
    };
    return (
        <div className="header">
            <div className='new_header'>
                <div className='profile'>
                    {isAuthenticated ? (
                        <img src={user.picture} alt={user.name}></img>) : (<svg xmlns="http://www.w3.org/2000/svg"

                            width="100%" height="100%" fill="white" className="bi bi-person-square " viewBox="0 0 16 16">
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="10%" height="16" fill="currentColor" className="bi bi-search-heart" viewBox="0 0 16 16">
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
            <div className='artist_txt'>
                Follow Artist
            </div>
            <div className='Boxes'>
            <Link className='links'  to={`/artist/${encodeURIComponent("Ed-Sheeran")}`} >  <Artist url="https://www.musicianwave.com/wp-content/uploads/2020/07/Ed-Sheeran-1-415x525.jpg" name="Ed-Sheeran" /></Link>
                <Artist url="https://www.musicianwave.com/wp-content/uploads/2022/03/Billie-Eilish-365x525.jpg" name="Billie-Eilish" />
                <Artist url="https://www.musicianwave.com/wp-content/uploads/2022/03/Ariana-Grande-367x525.jpg" name="Ariana-Grande" />
                <Artist url="https://www.musicianwave.com/wp-content/uploads/2022/03/The-Weeknd-447x525.jpg" name="The-Weeknd" />
                <Artist url="https://www.musicianwave.com/wp-content/uploads/2022/03/Taylor-Swift-350x525.jpg" name="Taylor-Swift" />
                <Artist url="https://www.musicianwave.com/wp-content/uploads/2022/04/Adele-386x525.png" name="Adele" />
                <Artist url="https://www.musicianwave.com/wp-content/uploads/2022/03/Justin-Bieber-367x525.jpg" name="Justin-Bieber" />
                <Artist url="https://www.musicianwave.com/wp-content/uploads/2022/03/Dua-Lipa-425x525.jpg" name="Dua-Lipa" />
                <Artist url="https://www.musicianwave.com/wp-content/uploads/2022/04/Charlie-Puth-377x525.jpg" name="Charlie-Puth" />
                <Artist url="https://www.musicianwave.com/wp-content/uploads/2022/04/Harry-Styles-354x525.jpg" name="Harry-Styles" />
                <Artist url="https://www.musicianwave.com/wp-content/uploads/2022/04/Miley-Cyrus-364x525.jpg" name="Miley-Cyrus" />
                <Artist url="https://www.musicianwave.com/wp-content/uploads/2022/04/Selena-Gomez-394x525.png" name="Selena-Gomez" />
                <Artist url="https://www.musicianwave.com/wp-content/uploads/2022/04/Zayn-Malik-393x525.jpg" name="Zayn-Malik" />
                <Artist url="https://www.musicianwave.com/wp-content/uploads/2022/04/Olivia-Rodrigo-445x525.png" name="Olivia Rodrigo" />
            </div>
            <div className='sub'>

                <div className="sub_left">
                    <b>Favorite</b> album
                    <div className='sub_img'>
                        <div className="album" >
                            <img src='data:image/jpeg;base64,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' alt='none' width='300px'></img>
                        </div>
                        <div className="album">
                            <img src='https://c4.wallpaperflare.com/wallpaper/98/689/83/pink-floyd-prism-album-covers-cover-art-wallpaper-preview.jpg' alt='none' width='300px'></img>
                        </div>
                        <div className="album">
                            <img src='https://c4.wallpaperflare.com/wallpaper/639/892/933/music-album-covers-led-zeppelin-wallpaper-preview.jpg' alt='none' width='300px'></img>
                        </div>
                        <div className="album">
                            <img src='https://c4.wallpaperflare.com/wallpaper/968/276/898/music-gorillaz-album-covers-wallpaper-preview.jpg' alt='none' width='300px'></img>
                        </div>
                        <div className="album">
                            <img src='https://c4.wallpaperflare.com/wallpaper/582/22/331/the-beatles-album-covers-sgt-peppers-lonely-hearts-club-band-entertainment-music-hd-art-wallpaper-preview.jpg' alt='none' width='300px'></img>
                        </div>
                    </div>
                </div>
                <div className="sub_right">
                </div>
            </div>
        </div>
    );
}
//onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}

export default Header;