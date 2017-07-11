import React, { Component } from 'react';
import SortableList from './sortable-list';

class SortableContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SortableList items={ this.props.files } onSortEnd={ this.props.onSortEnd } />
        )
    }
}

export default SortableContainer;