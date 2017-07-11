// Non-react packages.
const fs = require('fs');

// React packages.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DirectoryChooser from './components/directory-chooser';
import SortableList from './components/sortable-list';
import PMenu from './components/p-menu';
import { arrayMove } from 'react-sortable-hoc';

class App extends Component {
    constructor(props) {
        super(props);

        fs.readFile('./README.md', 'utf8', (err, stats) => {
            console.log(stats);
        });

        this.state = {
            fileList: [],
            directory: ''
        };

        this.getFilesFromDirectory(this.state.directory);
    }

    getFilesFromDirectory(directory) {
        console.log('Lijst wordt gerefeshed met url: ' + directory);
        fs.readdir(directory, (err, files) => {
            if(err) {
                return
            }

            this.setState({ fileList: files })
        });
    }

    onSortEnd({oldIndex, newIndex}) {
        this.setState({
            fileList: arrayMove(this.state.fileList, oldIndex, newIndex)
        });
    };

    onDirectoryChange(directory) {
        this.setState({ directory: directory });
        this.getFilesFromDirectory(directory);
    }

    render() {
        return(
            <div>
                <PMenu onDirectoryChange={ (directory) => this.onDirectoryChange(directory) } directory={ this.state.directory } onRefreshFiles={ () => this.getFilesFromDirectory(this.state.directory) } />
                <div className="container">
                    <SortableList files={ this.state.fileList } onSortEnd={ (oldIndex, newIndex) => this.onSortEnd(oldIndex, newIndex) } />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.app'));
