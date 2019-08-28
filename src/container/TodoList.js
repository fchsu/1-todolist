import React from 'react';
import './TodoList.css';
import {TaskList} from './TaskList';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tasks: {}};
    }
    render() {
        return (
            <div className="content">
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
            <div className="navbar">
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
            <div className="todoList">
                <Navbar table={this.state.table}
                    onHandleTabChange={this.HandleTabChange} />
                <Content table={this.state.table} />
            </div>
        );
    }
}

export {TodoList};