import React, { Component } from 'react'
import NewNote from './NewNote'
import NoteList from './NoteList';
import PropTypes from 'prop-types';

const propTypes = {
    notes: PropTypes.array,
    isLoading: PropTypes.bool.isRequired
};

const defaultProps = {
    notes: [],
    isLoading: true
};

 class Notes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [],
            isLoading: true
        };
    }

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes = () => {
        fetch(process.env.REACT_APP_NOTES_URL)
        .then(response => response.json())
        .then(jsonData => {
            this.setState({ notes: jsonData, isLoading: false })
        })  
    }

    addNote = (note) => {
        const requestOptions = {
            method: "POST",
            body: JSON.stringify({ "content": note })
        };

        fetch(process.env.REACT_APP_NOTES_URL, requestOptions)
        .then(response => response.text())
        .then((data) => {
            this.setState({ isLoading: true })
            this.loadNotes();
        })
    }

    onClickUpdate() {
        this.setState({ isLoading: true })
        this.loadNotes();   
    }

    onClickDeleteItem = event => {
        const deleteItem = event.target.getAttribute( "data-id" );
        const requestOptions = {
            method: "DELETE"
        };

        fetch(`${process.env.REACT_APP_NOTES_URL}/${deleteItem}`, requestOptions)
        .then(response => response.text())
        .then((data) => {
            this.setState({ isLoading: true })
            this.loadNotes();
        })
    }


    render() {
        const { notes, isLoading } = this.state;

        if (isLoading) {
          return null;
        }
        
        return (
            <div className="wrapper">
                <NoteList 
                    notes={notes}
                    onClickUpdate={(e) => this.onClickUpdate(e)}
                    onClickDeleteItem={(e) => this.onClickDeleteItem(e)}
                />
                <NewNote 
                    addNote={(e) => this.addNote(e)}
                />
            </div>
        );
    }

}

Notes.defaultProps = defaultProps;
Notes.propTypes = propTypes;

export default Notes