import React, { Component } from 'react'

class Todo extends Component {

    render() { 
        return ( 
            <li>
                <button>Edit</button>
                <button>X</button>
                <div>{this.props.task}</div>
            </li>
         );
    }
}
 
export default Todo;