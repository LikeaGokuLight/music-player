import React from 'react';
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMusic} from '@fortawesome/free-solid-svg-icons'

const Nav = ({ libraryStatus, setLibraryStatus }) => {
    return (
        <nav>
            <h1 className={'logo'}>Vita Music</h1>
            <button
                onClick={() => setLibraryStatus(!libraryStatus)}
                className={'button-60'}
            >
                Libreria
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    );
};

export default Nav;
