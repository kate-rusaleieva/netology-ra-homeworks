import React, { Component } from 'react'
import NoteItem from './NoteItem'

export default class NoteList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: props.notes
        };

        this.onClickDeleteItem = props.onClickDeleteItem;
        this.onClickUpdate = props.onClickUpdate;
    }

    renderItems(items) {
        return items.map((item, i) => {
            return (
                <NoteItem 
                    key={i}
                    item={item}
                    onClickDeleteItem={this.onClickDeleteItem}
                />
            );
        });
    }

    render() {
         const { items } = this.state;
         return (
            <div className="table-wrapper">
                <div className="table-header">
                    <h1 className="table-header__title">Заметки</h1>
                    <div className="table-header__other">
                        <button 
                            type="button" 
                            onClick={this.onClickUpdate}
                        >
                            Обновить
                        </button>
                    </div>
                </div>
                <table>
                    <tbody>
                        {this.renderItems(items)}                    
                    </tbody>
                </table>
            </div>
         );
     }

}