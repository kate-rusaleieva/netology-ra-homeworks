import React, { Component } from 'react'
import PropTypes from 'prop-types';

const propTypes = {
    item: PropTypes.object.isRequired,
    onClickDeleteItem: PropTypes.func.isRequired
};

const defaultProps = {
    item: {},
    onClickDeleteItem: () => { console.log( "default" ); }
};


class NoteItem extends Component {
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

NoteItem.defaultProps = defaultProps;
NoteItem.propTypes = propTypes;

export default NoteItem