import React from 'react';
import './TodoList.css';
import {AddTasks} from './component/AddTasks';
import {TaskList} from './component/TaskList';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tasks: {}};
        this.AddNewTasks = this.AddNewTasks.bind(this);
    }
    AddNewTasks(order, detail) {
        this.setState((state) => {
            state.tasks[order] = detail;
        });
    }
    render() {
        return (
            <div>
                <AddTasks onAddNewTasks={this.AddNewTasks} />
                <TaskList table={this.props.table} />
            </div>
        );
    }
}
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.HandleTabChange = this.HandleTabChange.bind(this);
    }
    HandleTabChange(e) {
        this.props.onHandleTabChange(e.target.dataset.value);
    }
    render() {
        return (
            <div>
                <div data-value="0" onClick={this.HandleTabChange}>My Tasks</div>
                <div data-value="1" onClick={this.HandleTabChange}>In Progress</div>
                <div data-value="2" onClick={this.HandleTabChange}>Completed</div>
            </div>
        );
    }
}
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {table: "0"};
        this.HandleTabChange = this.HandleTabChange.bind(this);
    }
    HandleTabChange(table) {
        this.setState({table: table});
    }
    render() {
        return (
            <div>
                <Navbar table={this.state.table}
                    onHandleTabChange={this.HandleTabChange} />
                <Content table={this.state.table} />
            </div>
        );
    }
}

export {TodoList};