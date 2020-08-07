import React, { Component } from 'react'
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {task: "Walk The Fish", id: 1, compleated: false},
                {task: "Groom Chickens", id: 2, compleated: true},
                {task: "Groom Chickens222", id: 3, compleated: false}
            ]
        }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
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

    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id)
                return {...todo, task: updatedTask}
            return todo;
        });

        this.setState({
            todos: updatedTodos
        });
    }

    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id)
                return {...todo, compleated: !todo.compleated}
            return todo;
        });

        this.setState({
            todos: updatedTodos
        })
    }

    render() { 
        const todos = this.state.todos.map(todo => 
            <Todo 
                key={todo.id} 
                task={todo.task}
                id={todo.id}
                compleated={todo.compleated}
                removeTodo={this.remove}
                updateTodo={this.update}
                toggleTodo={this.toggleCompletion}
            />)

        return ( 
            <div className="TodoList">
                <h1>
                    Todo List! 
                    <span>A Simple React Todo List App</span>
                </h1>
                <ul>
                    {
                        todos
                    }
                <NewTodoForm createTodo={this.create}/>
                </ul>
            </div>
         );
    }
}
 
export default TodoList;