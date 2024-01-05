import React, { Component } from 'react'

export default class Form extends Component {
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
