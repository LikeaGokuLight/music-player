import React, {useState} from 'react';
import './styles/app.scss';
//
import Player from "./components/Player";
import Song from "./components/Song";
import chillHopData from "./data";

const App = () => {
    // STATE
    const [songs, setSongs] = useState(chillHopData());
    const [currentSong, setCurrentSong] = useState(songs[1]);
    const [isPlaying, setIsPlaying] = useState(false);


    return (
        <div className="App">
            <Song currentSong={currentSong} />
            <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        </div>
    );
}

export default App;
