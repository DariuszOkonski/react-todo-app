import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleRemove() {
        this.props.removeTodo(this.props.id);
    }

    toggleForm(){
        this.setState({
            isEditing: !this.state.isEditing,
        })
    }

    handleUpdate(evt) {
        evt.preventDefault();

        this.props.updateTodo(this.props.id, this.state.task);

        this.setState({
            isEditing: !this.state.isEditing,
        })
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleToggle() {
        this.props.toggleTodo(this.props.id);
    }

    render() { 
        let result;
        if(this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input 
                            type="text"
                            name="task"
                            value={this.state.task}
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
            <li>
                <button onClick={this.toggleForm}>Edit</button>
                <button onClick={this.handleRemove} >X</button>
                <div 
                    className={this.props.compleated ? 'compleated' : ''}
                    onClick={this.handleToggle}
                >{this.props.task}</div>
            </li>
            )
        }

        return result;
    }
}
 
export default Todo;