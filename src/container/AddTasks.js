import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faEdit, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import './AddTasks.css';
import {InputCheckbox} from '../component/InputCheckbox';
import {InputValue} from '../component/InputValue';

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
        this.handlerInputValue = this.handlerInputValue.bind(this);
        this.handlerAddTask = this.handlerAddTask.bind(this);
    }
    handlerInputValue(title) {
        this.setState({title: title});
    }
    handlerAddTask() {
        this.props.onAddNewTask(this.state);
        this.setState({
            title: ''
        });
    }
    render() {
        return (
            <div className="addTasks">
                <div>
                    <div className="addTaskTitle">
                        <InputCheckbox />
                        <InputValue inputType="text"
                                    inputPlaceholder="Type Something Here…"
                                    inputClass="inputTitle"
                                    inputValue={this.state.title}
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
        this.state = {focusInput: false};
        this.handlerInputFocus = this.handlerInputFocus.bind(this);
        this.handlerAddNewTask = this.handlerAddNewTask.bind(this);
    }
    handlerInputFocus() {
        this.setState({focusInput: true});
    }
    handlerAddNewTask(task) {
        this.props.onAddNewTask(task);
    }
    render() {
        return (
            <div>
                <input className="taskInput" onFocus={this.handlerInputFocus} placeholder="+ Add Task" />
                <TaskForm onAddNewTask={this.handlerAddNewTask} />
            </div>
        );
    }
}

export {AddTasks};