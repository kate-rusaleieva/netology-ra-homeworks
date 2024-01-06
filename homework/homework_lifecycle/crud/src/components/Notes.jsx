import React, { Component } from 'react'

export default class Notes extends Component {
    state = {
        notes: [],
    }

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes = () => {
        console.log(process.env.VITE_BASE_URL)

        fetch(process.env.REACT_APP_NOTES_URL)
            .then(response => console.log(response))
         

           /* fetch(`https://jsonplaceholder.typicode.com/posts`)
                .then((response) => console.log(response));*/
    }

    render() {
        const { notes } = this.state;

        console.log( notes )

        return (
            <div>
                
            </div>
        );
    }

}