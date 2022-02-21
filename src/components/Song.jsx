import React from 'react';
import {motion} from "framer-motion";

const Song = ({ currentSong, isPlaying }) => {
    const { name, cover, artist}  = currentSong

    return (
        <div className={'song-container'} >
            <motion.img
                src={cover}
                alt="Cover Image"
                animate={{
                    rotate: isPlaying ? '360deg': 0,

                }}
                transition={{
                    duration: isPlaying ? 15 : 2,
                    repeat: isPlaying && Infinity
                }}
            />
            <h2>{ name }</h2>
            <h3>{ artist }</h3>
        </div>
    );
};

export default Song;
