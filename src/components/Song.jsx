import React from 'react';

const Song = ({ currentSong }) => {
    const { name, cover, artist, color}  = currentSong

    const backgroundStyle = {
        background : `linear-gradient(315deg, ${color[0]} 50%, ${color[1]} 65%`
    }

    return (
        <div className={'song-container'} style={backgroundStyle}>
            <img src={cover} alt="Cover Image"/>
            <h2>{ name }</h2>
            <h3>{ artist }</h3>
        </div>
    );
};

export default Song;
