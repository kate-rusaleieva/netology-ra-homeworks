import React, { Component } from 'react'

export default class NoteItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: props.item
        };

        this.onClickDeleteItem = props.onClickDeleteItem;
    }

    render() {
        const { item } = this.state;

        return (
            <tr 
                key={item.id} 
                id={item.id}
            >
                <td>{item.content}</td>
                <td>
                    <button 
                        type="button" 
                        data-id={item.id}
                        onClick={this.onClickDeleteItem}
                    >
                        Удалить
                    </button>
                </td>
            </tr>
        );
     }
     
}