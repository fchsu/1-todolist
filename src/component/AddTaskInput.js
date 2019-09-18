import React from 'react';
import './AddTaskInput.css';

class AddTaskInput extends React.Component {
    constructor(props) {
        /** 
         * props.propsType:        <input /> type
         * props.propsPlaceholder: <input /> placeholder
         * props.propsClass:       <input /> class
         * props.onClickInput():     修改上層 state
        */
        super(props);
        this.handlerClick = this.handlerClick.bind(this);
    }
    handlerClick() {
        this.props.onClickInput();
    }
    render() {
        return (
            <div className="w-100">
                <input type={this.props.propsType}
                        placeholder={this.props.propsPlaceholder}
                        className={this.props.propsClass}
                        onClick={this.handlerClick} />
            </div>
        );
    }
}

export {AddTaskInput};