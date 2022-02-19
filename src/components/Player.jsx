import React from 'react';
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay, faAngleLeft, faAngleRight, faPause} from '@fortawesome/free-solid-svg-icons'

const Player = ({ currentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo }) => {

    const onSongHandler = () => {
        if (isPlaying) {
            setIsPlaying(!isPlaying)
            audioRef.current.pause()
        } else {
            setIsPlaying(!isPlaying)
            audioRef.current.play()
        }
    }

    const adjustTime = (time) => {
        return (
            Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        )
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({ ...songInfo, currentTime: e.target.value })
    }

    return (
        <div className={'player-container'}>
            <div className={'time-control'}>
                <p>{ adjustTime(songInfo.currentTime) }</p>
                <input onChange={dragHandler} min={0} max={songInfo.duration} value={songInfo.currentTime} type="range" />
                <p>{ adjustTime(songInfo.duration) }</p>
            </div>
            <div className={'play-control'}>
                <FontAwesomeIcon className={'slip-back'} icon={ faAngleLeft } size={'2x'} />
                <FontAwesomeIcon onClick={onSongHandler} className={'play'} icon={ isPlaying ? faPause : faPlay } size={'2x'} />
                <FontAwesomeIcon className={'skip-forward'} icon={ faAngleRight } size={'2x'} />
            </div>
        </div>
    );
};

export default Player;
