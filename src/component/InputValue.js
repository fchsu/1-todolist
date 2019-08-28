import React from 'react';
import './InputValue.css';

class InputValue extends React.Component {
    constructor(props) {
        /** 
         * props.inputType:        <input /> type
         * props.inputPlaceholder: <input /> placeholder
         * props.inputClass:       <input /> class
         * props.inputValue:       <input /> value
         * props.onInputValue():     修改上層 state
        */
        super(props);
        this.handlerChange = this.handlerChange.bind(this);
    }
    handlerChange(e) {
        const title = e.target.value;
        this.props.onInputValue(title);
    }
    render() {
        return (
            <div>
                <input type={this.props.inputType}
                        placeholder={this.props.inputPlaceholder}
                        className={this.props.inputClass}
                        value={this.props.inputValue}
                        onChange={this.handlerChange} />
            </div>
        );
    }
}

export {InputValue};