import React, { Component } from 'react'

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
            </form>
         );
    }
}
 
export default NewTodoForm;