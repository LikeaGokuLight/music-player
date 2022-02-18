import React from 'react';
import './styles/app.scss';
//
import Player from "./components/Player";
import Song from "./components/Song";
import chillHopData from "./data";

const App = () => {
    return (
        <div className="App">
            <Song />
            <Player />
        </div>
    );
}

export default App;
