import React from 'react';
import './Wrap.css';
import {AddTasks} from './component/AddTasks';
import {TodoList} from './component/TodoList';

class Wrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {task: {}};
        this.AddNewTasks = this.AddNewTasks.bind(this);
    }
    AddNewTasks(detail) {
        this.setState((state) => {
            state.task = detail;
        });
    }
    render() {
        return (
            <div className="wrap">
                <AddTasks onAddNewTasks={this.AddNewTasks} />
                <TodoList addTask={this.state.task} />
            </div>
        );
    }
}

export {Wrap};