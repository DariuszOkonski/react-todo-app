import React, { Component } from 'react'
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {task: "Walk The Fish", id: 1},
                {task: "Groom Chickens", id: 2}
            ]
        }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
    }

    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    remove(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    render() { 
        const todos = this.state.todos.map(todo => 
            <Todo 
                key={todo.id} 
                task={todo.task}
                id={todo.id}
                removeTodo={this.remove}
            />)

        return ( 
            <div>
                <h1>Todo List</h1>
                <NewTodoForm createTodo={this.create}/>
                <ul>
                    {
                        todos
                    }
                </ul>
            </div>
         );
    }
}
 
export default TodoList;