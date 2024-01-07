import React, { Component } from 'react'
import WatchesList from './WatchesList'
import Form from './Form'

export default class Watches extends Component {
    constructor(props) {
        super(props);

        this.state = {
            watchList: []
        }

        this.form = {
            name: "",
            timezone: "",
        };
    }

    onClickDeleteItem = event => {
        const deleteItem = event.target.getAttribute( "data-key" );
        let newData = [];

        this.state.watchList.map((item, i) => {
            if( item.name !== deleteItem ) {
              newData.push( item );
            }
        });

        document.getElementById( deleteItem ).remove();

        this.setState({ newData });
    }

    onSubmit = event => {
        event.preventDefault();

        if(this.form.name === "") {
            alert( "Введите название" );
            return false;
        }

        if(this.form.timezone === "") {
            alert( "Введите временную зону" );
            return false;
        }

        this.state.watchList.push( this.form );

        this.form = {
            name: "",
            timezone: "",
        };
        event.target.reset();

        this.setState({ watchList: this.state.watchList });
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.form[name] = value;
    }

    render() {
        return (
            <div className="wrapper">
                <Form
                     onSubmit={(e) => this.onSubmit(e)}
                     handleInputChange={(e) => this.handleInputChange(e)}
                />
                <WatchesList 
                    items={this.state.watchList} 
                    onClickDeleteItem={(e) => this.onClickDeleteItem(e)}
                />
            </div>
        );
    }
}
