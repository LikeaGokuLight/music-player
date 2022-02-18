import React from 'react';
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'

const Player = () => {
    return (
        <div className={'player-container'}>
            <h1>Player</h1>
            <div className={'time-control'}>
                <p>start time</p>
                <input type="range"/>
                <p>end time</p>
            </div>
            <div className={'play-control'}>
                <FontAwesomeIcon className={'slip-back'} icon={ faAngleLeft } size={'2x'} />
                <FontAwesomeIcon className={'play'} icon={ faPlay } size={'2x'} />
                <FontAwesomeIcon className={'skip-forward'} icon={ faAngleRight } size={'2x'} />
            </div>
        </div>
    );
};

export default Player;
