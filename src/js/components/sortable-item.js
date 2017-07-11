import React from 'react';

import { SortableElement } from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) => {
    return (
        <li className="list-group-item">{value}</li>
    )
});

export default SortableItem;