import React from 'react';
import './InputValue.css';

class InputValue extends React.Component {
    constructor(props) {
        /** 
         * props.propsType:        <input /> type
         * props.propsPlaceholder: <input /> placeholder
         * props.propsClass:       <input /> class
         * props.propsValue:       <input /> value
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
                <input type={this.props.propsType}
                        placeholder={this.props.propsPlaceholder}
                        className={this.props.propsClass}
                        onChange={this.handlerChange} />
            </div>
        );
    }
}

export {InputValue};