import React, { Component } from 'react'
import PropTypes from 'prop-types';

const propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

const defaultProps = {
    handleInputChange: () => { console.log( "default" ); },
    onSubmit: () => { console.log( "default" ); }
};

class Form extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = props.handleInputChange;
        this.onSubmit = props.onSubmit;
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <div className="field-wrapper">
                        <label htmlFor="name">Название</label>
                        <input
                            id="name" 
                            name="name"
                            onChange={this.handleInputChange} 
                        />
                    </div>
                    <div className="field-wrapper">
                        <label htmlFor="timezone">Временная зона</label>
                        <input
                            id="timezone" 
                            name="timezone"
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

Form.defaultProps = defaultProps;
Form.propTypes = propTypes;

export default Form