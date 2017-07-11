import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import SortableItem from './sortable-item';

const SortableList = SortableContainer(({ files }) => {
    const renderFiles = files.map((file, index) => {
        return <SortableItem key={`item-${index}`} index={ index } value={ file } />
    });

    return (
        <ul className="list-group">
            { renderFiles }
        </ul>  
    );
});

export default SortableList;