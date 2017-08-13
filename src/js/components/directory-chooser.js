import React from 'react';

const DirectoryChooser = ({ directory, onDirectoryChange }) => {
    return (
        <input className="form-control" type="text" value={ directory }  onChange={ (event) => onDirectoryChange(event.target.value) } />
    );
};

export default DirectoryChooser;