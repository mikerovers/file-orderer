import React from 'react';

import { SortableElement } from 'react-sortable-hoc';
import FileItem from './file-item';

const SortableItem = SortableElement(({value, onNewNameChange, file}) => {
    return (
        <div>
            <li className="list-group-item">
                <div className="form-group row full-width">
                    <label className="col-6 col-form-label">{ value.oldName }</label>
                    <div className="col-6">
                        <input className="form-control" type="text" value={ value.newName } onChange={ (e) => onNewNameChange(file.index, e.target.value) } />
                    </div>
                </div>
            </li>
        </div>
    )
});

export default SortableItem;