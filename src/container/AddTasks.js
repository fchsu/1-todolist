import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faEdit, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import './AddTasks.css';
import {InputCheckbox} from '../component/InputCheckbox';
import {InputValue} from '../component/InputValue';
import {AddTaskInput} from '../component/AddTaskInput';

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.handlerInputValue = this.handlerInputValue.bind(this);
        this.handlerAddTask = this.handlerAddTask.bind(this);
    }
    handlerInputValue(title) {
        this.setState({title: title});
    }
    handlerAddTask() {
        this.props.onAddNewTask(this.state);
    }
    render() {
        return (
            <div className="addTasks">
                <div>
                    <div className="addTaskTitle">
                        <InputCheckbox />
                        <InputValue propsType="text"
                                    propsPlaceholder="Type Something Here…"
                                    propsClass="inputTitle"
                                    onInputValue={this.handlerInputValue} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faEdit} />
                    </div>
                </div>
                <div>
                    <div >
                        <label>Deadline</label>
                        <input type="date" />
                        <input type="time" />
                    </div>
                    <div>
                        <label>File</label>
                        <span className="attached">
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                    </div>
                    <div>
                        <label>Comment</label>
                        <textarea placeholder="Type your memo here…"></textarea>
                    </div>
                    <div>
                        <span><FontAwesomeIcon icon={faTimes} /> Cancel</span>
                        <span onClick={this.handlerAddTask}><FontAwesomeIcon icon={faPlus} /> Add Task</span>
                    </div>
                </div>
            </div>
        );
    }
}
class AddTasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickInput: 0,
        };
        this.handlerInputClick = this.handlerInputClick.bind(this);
        this.handlerAddNewTask = this.handlerAddNewTask.bind(this);
    }
    handlerInputClick() {
        this.setState({clickInput: 1});
    }
    handlerAddNewTask(task) {
        this.props.onAddNewTask(task);
        this.setState({
            clickInput: 0,
        })
    }
    render() {
        const addTask = [];
        addTask.push(<AddTaskInput propsType="text"
                                    propsPlaceholder="+ Add Task"
                                    propsClass="taskInput"
                                    onClickInput={this.handlerInputClick} />);
        addTask.push(<TaskForm onAddNewTask={this.handlerAddNewTask} />);
        return (
            <div className="w-100">
                {addTask[this.state.clickInput]}
            </div>
        );
    }
}

export {AddTasks};