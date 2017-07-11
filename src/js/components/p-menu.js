/**
 * Created by mike on 11-07-17.
 */

import React from 'react';
import DirectoryChooser from './directory-chooser';

const PMenu = ({ onRefreshFiles, directoryName, onDirectoryChange }) => {
    return (
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">Super cool muziek sorteer syseem</a>

            <div className="collapse navbar-collapse justify-content-between" id="navbar">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" onClick={ onRefreshFiles }>Refresh list</a>
                    <DirectoryChooser directory={ directoryName } onDirectoryChange={ (directory) => onDirectoryChange(directory) } />
                </div>
            </div>
        </nav>
    );
};

export default PMenu;