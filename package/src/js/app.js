// Non-react packages.
const fs = require('fs');
const fse = require('fs-extra');
const extfs = require('extfs');
import File from "./File";

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

        this.state = {
            fileList: [],
            directory: '/',
            exportDirectory: 'sorted',
            tussenVoegsel: '-'
        };

        this.getFilesFromDirectory(this.state.directory);
    }

    getFilesFromDirectory(directory) {
        console.log('Lijst wordt gerefeshed met url: ' + directory);
        let list;
        fs.readdir(directory, (err, files) => {
            if(err) {
                return
            }

            let fileArray = [];

            files.map((file, id) => {
                let object = new File(file, file, id);
                fileArray.push(object);
            });

            this.setState({ fileList: fileArray })
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

    handleNewName(id, name) {
        console.log(id);
        this.state.fileList.map((file) => {
            if(file.index === id) {
                let fileFound = file;
                fileFound.newName = name;
                this.setState({ file: fileFound });
            }
        });
    }

    onExport() {
        let exportDirectory = this.state.directory + "/" + this.state.exportDirectory;

        // Check if export directory is empty.
        if(!extfs.isEmptySync(exportDirectory)) {
            extfs.removeSync(exportDirectory);
        }

        // Make directory in current folder.
        try {
            fs.mkdirSync(exportDirectory);
        } catch (err) {
            console.log(err);
        }

        // Copy files to directory
        let files = this.state.fileList;

        files.map((file, index) => {
            let number = index;
            if(number < 10) {
                number = "0" + number;
            } else {
                number = "" + number;
            }

            let fileName = number + this.state.tussenVoegsel + file.newName;
            let oldPath = this.state.directory + '/' + file.oldName;
            let newPath = this.state.directory + '/' + this.state.exportDirectory + '/' + fileName;
            console.log(newPath);

            try {
                fse.copySync(oldPath, newPath);
            } catch (err) {
                console.log(err);
            }
        });
    }

    render() {
        return(
            <div>
                <PMenu tussenVoegsel={ this.state.tussenVoegsel } onTussenVoegselChange={ (voegsel) => this.setState({ tussenVoegsel: voegsel }) } onExportDirectoryChange={ (directory) => this.setState({ exportDirectory: directory }) } exportDirectory={ this.state.exportDirectory } onExport={ () => this.onExport() } onDirectoryChange={ (directory) => this.onDirectoryChange(directory) } directoryName={ this.state.directory } onRefreshFiles={ () => this.getFilesFromDirectory(this.state.directory) } />
                <div className="container">
                    <SortableList onNewNameChange={ (id, name) => this.handleNewName(id, name) } files={ this.state.fileList } onSortEnd={ (oldIndex, newIndex) => this.onSortEnd(oldIndex, newIndex) } />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.app'));
