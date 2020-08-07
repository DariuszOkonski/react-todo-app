import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value,
        })
    }

    handleSubmit(evt){
        evt.preventDefault();

        this.props.createTodo({task: this.state.task, id: uuid()})

        this.setState({
            task: ""
        })
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">New todo</label>
                <input 
                    type="text"
                    id="task"
                    name="task"
                    placeholder="New Todo"
                    value={this.state.task}
                    onChange={this.handleChange}
                    required
                />
                <button>Add Todo</button>
            </form>
         );
    }
}
 
export default NewTodoForm;