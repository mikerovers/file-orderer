import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import SortableItem from './sortable-item';

const SortableList = SortableContainer(({ files, onNewNameChange }) => {
    const renderFiles = files.map((file, index) => {
        return <SortableItem onNewNameChange={ (index, name) => onNewNameChange(index, name) } file={ file } key={`item-${index}`} index={ index } value={ file } />
    });

    return (
        <ul className="list-group">
            { renderFiles }
        </ul>  
    );
});

export default SortableList;