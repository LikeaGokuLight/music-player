import React from 'react';
import LibrarySong from "./LibrarySong";
// import { v4 as uuidv4 } from 'uuid';

const Library = ({ songs, setCurrentSong, setIsPlaying, audioRef, isPlaying, setSongs, libraryStatus }) => {

    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className={'library-songs'}>
                {
                    songs.map((song) => (
                            <LibrarySong
                                key={song.id}
                                song={song}
                                songs={songs}
                                setCurrentSong={setCurrentSong}
                                setIsPlaying={setIsPlaying}
                                audioRef={audioRef}
                                isPlaying={isPlaying}
                                setSongs={setSongs}
                            />)
                        )
                }
            </div>
        </div>
    );
};

export default Library;
