import React from 'react';
import './Left.css';
import Home from './img/home.png'
import activity from './img/activity.png'
import bell from './img/bell-ring.png'
import passion from './img/passion.png'
import gear from './img/gear.png'
import Search from './img/search.png'
function Left() {
    return (
<div class="left">
<div class="logo">
  Beats
  </div>
  <div className="nav">
    <div className="nav-element active"> <div className="img space">  <img src={Home} alt=""></img></div> <div className="nav-text"> <h6 >Home</h6></div>   </div>
  <div className="nav-element"> <div className="img space">  <img src={Search} alt=""></img></div> <div className="nav-text"> <h6 >Discover</h6></div> </div>
  <div className="nav-element"> <div className="img space">  <img src={passion} alt=""></img></div> <div className="nav-text"> <h6 >Favourites</h6></div> </div>
  <div className="nav-element"> <div className="img space">  <img src={bell} alt=""></img></div> <div className="nav-text"> <h6 >Notification</h6></div> </div>
  <div className="nav-element"> <div className="img space">  <img src={activity} alt=""></img></div> <div className="nav-text"> <h6 >Activity</h6></div> </div>
  <div className="nav-element"> <div className="img space">  <img src={gear} alt=""></img></div> <div className="nav-text"> <h6 >Settings</h6></div> </div>
    </div>

</div>
    );
}

export default Left;