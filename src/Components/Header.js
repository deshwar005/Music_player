import React from 'react';
import './Header.css';
import Home from './img/home.png';
import setting_icon from './img/setting.png';
import { useAuth0 } from "@auth0/auth0-react";
import Artist from './Artist';
const Header = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="header">
            <div className='new_header'>
            <div className='profile'><img src={Home} alt=''></img></div>
            <div className='name'>Good Morning, <b> <button onClick={() => loginWithRedirect()}>Log In</button></b></div>
            <div className='search'><input type="text" placeholder='What do you want ?' ></input></div>
            <div className='settings'><img src={setting_icon} alt=''></img></div>
        </div>
        <div className='artist_txt'>
            Follow Artist
        </div>
        <div className='Boxes'>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
        </div>
        <div className='sub'>

            <div className="sub_left">
                <b>Favorite</b> album
                <div className='sub_img'>
                    <div classname="album" >
                <img src='https://qph.cf2.quoracdn.net/main-qimg-3a8af4f2128be7a52b86afc3ebf77c70-lq' alt='none' width='300px'></img>
                </div>
                <div classname="album">
                <img src='https://qph.cf2.quoracdn.net/main-qimg-3a8af4f2128be7a52b86afc3ebf77c70-lq' alt='none' width='300px'></img>
                </div>
                <div classname="album">
                <img src='https://qph.cf2.quoracdn.net/main-qimg-3a8af4f2128be7a52b86afc3ebf77c70-lq' alt='none' width='300px'></img>
                </div> 
                 <div classname="album">
                <img src='https://qph.cf2.quoracdn.net/main-qimg-3a8af4f2128be7a52b86afc3ebf77c70-lq' alt='none' width='300px'></img>
                </div>
                <div classname="album">
                <img src='https://qph.cf2.quoracdn.net/main-qimg-3a8af4f2128be7a52b86afc3ebf77c70-lq' alt='none' width='300px'></img>
                </div>
                </div>
            </div>
            <div className="sub_right">
ss
            </div>
        </div>
        </div>
    );
}

export default Header;