import React, {useEffect} from 'react';
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay, faAngleLeft, faAngleRight, faPause} from '@fortawesome/free-solid-svg-icons'

const Player = ({ currentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo, songs, setCurrentSong, setSongs }) => {

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

    const skipTrackHandler = async ( direction ) => {
        // skip-back or skip-forward
        let findActiveSongIndex = songs.findIndex((song) => song.id === currentSong.id)

        if (direction === 'skip-forward') {
            await setCurrentSong(songs[(findActiveSongIndex + 1) % songs.length])
        }

        if (direction === 'skip-back') {
            if ( (findActiveSongIndex - 1) % songs.length === -1 ) {
                setCurrentSong(songs[songs.length -1])
                return
            }

            setCurrentSong(songs[(findActiveSongIndex - 1) % songs.length])
        }
    }

    useEffect(async () => {
        const newSongs = songs.map((song) => {
            if (song.id === currentSong.id) {
                return {
                    ...song, active: true
                }
            } else {
                return {
                    ...song, active: false
                }
            }
        })

        await setSongs(newSongs)

        if ( isPlaying ) {
            audioRef.current.play()
        }

    }, [currentSong]);

    // Styles animation
    const trackAnime = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }

    const trackBackground = {
        background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`
    }

    return (
        <div className={'player-container'}>
            <div className={'time-control'}>
                <p>{ adjustTime(songInfo.currentTime) }</p>
                <div style={trackBackground} className={'track'}>
                    <input
                        onChange={dragHandler}
                        min={0}
                        max={songInfo.duration || 0}
                        value={songInfo.currentTime}
                        type="range"
                    />
                    <div style={trackAnime} className={'animate-track'}></div>
                </div>
                <p>{ songInfo.duration ? adjustTime(songInfo.duration) : '0:00'}</p>
            </div>
            <div className={'play-control'}>
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler('skip-back')}
                    className={'skip-back'}
                    icon={ faAngleLeft }
                    size={'2x'}
                />
                <FontAwesomeIcon
                    onClick={onSongHandler}
                    className={'play'}
                    icon={ isPlaying ? faPause : faPlay }
                    size={'2x'}
                />
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler('skip-forward')}
                    className={'skip-forward'}
                    icon={ faAngleRight }
                    size={'2x'}
                />
            </div>
        </div>
    );
};

export default Player;
