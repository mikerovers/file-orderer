import React from 'react';

const DirectoryChooser = ({ directory, onDirectoryChange }) => {
    return (
        <div>
            <input className="form-control" type="text" value={ directory }  onChange={ (event) => onDirectoryChange(event.target.value) } />
        </div>
    );
};

export default DirectoryChooser;