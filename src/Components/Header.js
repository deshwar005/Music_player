import React from 'react';
import './Header.css';
import Home from './img/home.png';
import setting_icon from './img/setting.png';
import Artist from './Artist';
const Header = () => {
    return (
        <div className="header">
            <div className='new_header'>
            <div className='profile'><img src={Home} alt=''></img></div>
            <div className='name'>Good Morning, Guna</div>
            <div className='search'><input type="text" placeholder='What do you want ?' ></input></div>
            <div className='settings'><img src={setting_icon} alt=''></img></div>
        </div>
        <div className='artist'>
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
        </div>
    );
}

export default Header;