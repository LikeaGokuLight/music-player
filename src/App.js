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
        duration: 0
    });
    const [libraryStatus, setLibraryStatus] = useState(false);
    // REF
    const audioRef = useRef()

    // FUNCTIONS
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime
        const duration = e.target.duration
        setSongInfo({...songInfo, currentTime: current, duration })
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
            />
        </div>
    );
}

export default App;
