import React, {useRef, useState} from 'react';
import './styles/app.scss';
//
import Player from "./components/Player";
import Song from "./components/Song";
import chillHopData from "./data";
import Library from "./components/Library";
import Nav from "./components/Nav";

const App = () => {
    // STATE
    const [songs, setSongs] = useState(chillHopData());
    const [currentSong, setCurrentSong] = useState(songs[1]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0
    });
    const [libraryStatus, setLibraryStatus] = useState(false);
    // REF
    const audioRef = useRef()

    // FUNCTIONS
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime
        const duration = e.target.duration
        // Calculate percentage
        const roundedCurrent = Math.round(current)
        const roundedDuration = Math.round(duration)
        const animation = Math.round( (roundedCurrent /  roundedDuration) * 100 )

        setSongInfo({...songInfo, currentTime: current, duration, animationPercentage: animation })
    }

    const songEndHandler = async () => {
        let findActiveSongIndex = songs.findIndex((song) => song.id === currentSong.id)
        await setCurrentSong(songs[(findActiveSongIndex + 1) % songs.length])
    }

    return (
        <div className="App">
            <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
            <Song currentSong={currentSong} />
            <Player
                currentSong={currentSong}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                audioRef={audioRef}
                songInfo={songInfo}
                setSongInfo={setSongInfo}
                songs={songs}
                setCurrentSong={setCurrentSong}
                setSongs={setSongs}
            />
            <Library
                songs={songs}
                setCurrentSong={setCurrentSong}
                setIsPlaying={setIsPlaying}
                audioRef={audioRef}
                isPlaying={isPlaying}
                setSongs={setSongs}
                libraryStatus={libraryStatus}
            />

            <audio
                onTimeUpdate={timeUpdateHandler}
                src={currentSong.audio}
                ref={audioRef}
                onLoadedMetadata={timeUpdateHandler}
                onEnded={songEndHandler}
            />
        </div>
    );
}

export default App;
