import React, {useRef, useState} from 'react';
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay, faAngleLeft, faAngleRight, faPause} from '@fortawesome/free-solid-svg-icons'

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
    const [songInfo, setSongInfo] = useState({
        currentTime: null,
        duration: null
    });

    const audioRef = useRef()

    const { audio }  = currentSong

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

    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime
        const duration = e.target.duration
        setSongInfo({...songInfo, currentTime: current, duration })
    }

    return (
        <div className={'player-container'}>
            <div className={'time-control'}>
                <p>{ adjustTime(songInfo.currentTime) }</p>
                <input type="range"/>
                <p>{ adjustTime(songInfo.duration) }</p>
            </div>
            <div className={'play-control'}>
                <FontAwesomeIcon className={'slip-back'} icon={ faAngleLeft } size={'2x'} />

                {
                    isPlaying
                        ? <FontAwesomeIcon onClick={onSongHandler} className={'play'} icon={ faPause } size={'2x'} />
                        : <FontAwesomeIcon onClick={onSongHandler} className={'play'} icon={ faPlay } size={'2x'} />
                }


                <FontAwesomeIcon className={'skip-forward'} icon={ faAngleRight } size={'2x'} />
            </div>
            <audio
                onTimeUpdate={(e) => timeUpdateHandler(e)}
                src={audio}
                ref={audioRef}
                onLoadedMetadata={timeUpdateHandler}
            />
        </div>
    );
};

export default Player;
