import React, { Component, useState, useEffect } from 'react'
import moment from 'moment-timezone'
import PropTypes from 'prop-types';

const propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onClickDeleteItem: PropTypes.func.isRequired
};

const defaultProps = {
    item: {},
    index: 0,
    onClickDeleteItem: () => { console.log( "default" ); }
};

class Watch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: props.item,
            index: props.index,
            time: moment()
        };

        this.onClickDeleteItem = props.onClickDeleteItem;
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        this.setState({
            time: moment()
        });
    }

    render() {
        const { item, index, time } = this.state;

        return (
            <tr 
                key={item.name + index} 
                id={item.name}
            >
                <td>{item.name}</td>
                <td>{moment().utcOffset(parseInt(item.timezone)).format("HH:mm:ss")}</td>
                <td>
                    <button 
                        type="button" 
                        data-key={item.name}
                        onClick={this.onClickDeleteItem}
                    >
                        Удалить
                    </button>
                </td>
            </tr>
        );
     }
     
}

Watch.defaultProps = defaultProps;
Watch.propTypes = propTypes;

export default Watch