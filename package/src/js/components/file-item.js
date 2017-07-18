/**
 * Created by mike on 11-07-17.
 */

// Non-react packages.
const fs = require('fs');

// React packages.
import React, { Component } from 'react';

class FileItem extends Component {
    constructor(props) {
        super(props);
    }

    updateNewName(name) {

    }

    render() {
        return(
            <div>
                <li className="list-group-item">{ this.state.oldName }</li>
            </div>
        );
    }
}

export default FileItem;