import React, { Component } from 'react'
import Watch from './Watch'
import PropTypes from 'prop-types';

const propTypes = {
    items: PropTypes.array.isRequired,
    onClickDeleteItem: PropTypes.func.isRequired
};

const defaultProps = {
    items: [],
    onClickDeleteItem: () => { console.log( "default" ); }
};

class WatchesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: props.items
        };

        this.onClickDeleteItem = props.onClickDeleteItem;
    }

    renderItems(items) {
        return items.map((item, i) => {
            return (
                <Watch 
                    key={i}
                    item={item}
                    index={i}
                    onClickDeleteItem={this.onClickDeleteItem}
                />
            );
        });
    }

    render() {
         const { items } = this.state;
         return (
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <td>Название</td>
                            <td>Временная зона</td>
                            <td>Действия</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderItems(items)}                    
                    </tbody>
                </table>
            </div>
         );
     }

}

WatchesList.defaultProps = defaultProps;
WatchesList.propTypes = propTypes;

export default WatchesList