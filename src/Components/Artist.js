import React from 'react';
import './Artist.css';

function Artist(props) {
    return (
        <div className='artist' >
            <div className='artist_img'>
                 <div style={{ background: `url(${props.url})`}}></div>
                <p className='artisttxt'>{props.name}</p>
            </div>
        </div>
    );
}

export default Artist;
