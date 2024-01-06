import React, { Component } from 'react'
import PropTypes from 'prop-types';

const propTypes = {
    note: PropTypes.string,
    addNote: PropTypes.func.isRequired,
};

const defaultProps = {
    note: "",
    addNote: () => { console.log( "default" ); },
};

class NewNote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            note: ""
        };

        this.addNote = props.addNote;
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState( prevForm => ({...prevForm, [name]: value}));
    }

    onSubmit = event => {
        event.preventDefault();
        this.addNote(this.state.note);
    }

    render() {
        return (
            <div className="wrapper">
                <form className="form" onSubmit={this.onSubmit}>
                    <div className="field-wrapper">
                        <label htmlFor="name">New note</label>
                        <textarea
                            rows="10" 
                            cols="45"
                            id="note" 
                            name="note"
                            onChange={this.handleInputChange} 
                        />
                    </div>
                    <div className="field-wrapper">
                        <button type="submit">Добавить</button>
                    </div>
                </form>
            </div>
        );
    }

}

NewNote.defaultProps = defaultProps;
NewNote.propTypes = propTypes;

export default NewNote