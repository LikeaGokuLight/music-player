import React from 'react';


const LibrarySong = ({ song, setCurrentSong, setIsPlaying, audioRef, isPlaying, songs, setSongs }) => {
    const { name, artist, cover } = song

    const songSelectHandler = async () => {
        const id = song.id
        await setCurrentSong(song)

        // Active Song
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song, active: true
                }
            } else {
                return {
                    ...song, active: false
                }
            }
        })

        setSongs(newSongs)

        if ( isPlaying ) {
            audioRef.current.play()
        }
    }

    return (
        <div className={`library-song ${song.active ? 'selected' : ''}`} onClick={songSelectHandler}>
            <img src={ cover } alt={ artist }/>
            <div className={'song-description'}>
                <h3>{ name }</h3>
                <h4>{ artist }</h4>
            </div>
        </div>
    );
};

export default LibrarySong;
