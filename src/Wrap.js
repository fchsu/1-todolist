import React from 'react';
import './Wrap.css';
import {AddTasks} from './container/AddTasks';
import {TodoList} from './container/TodoList';

class Wrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {task: {}};
        this.handlerAddNewTask = this.handlerAddNewTask.bind(this);
    }
    handlerAddNewTask(task) {
        this.setState({task: task});
    }
    render() {
        return (
            <div className="wrap">
                <AddTasks onAddNewTask={this.handlerAddNewTask} />
                <TodoList addTask={this.state.task} />
            </div>
        );
    }
}

export {Wrap};