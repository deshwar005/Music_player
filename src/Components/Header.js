import React from 'react';
import './Header.css';
import Home from './img/home.png';
const Header = () => {
    return (
        <div className="header">
            <div className='profile'><img src={Home} alt=''></img></div>
            <div className='name'>Good Morning, Guna</div>
            <div className='search'><input type="text" placeholder='What do you want ?' ></input></div>
            <div className='settings'><img src={Home} alt=''></img></div>
        </div>
    );
}

export default Header;