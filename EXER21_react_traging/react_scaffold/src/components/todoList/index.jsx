import React, { Component } from 'react';
import PropTypes from 'prop-types'
import TodoItem from '../todoItem/index.jsx'
import './index.css'

export default class todoList extends Component {
    static propTypes ={
        todos:PropTypes.array.isRequired,
        checkTodo:PropTypes.func.isRequired
    }

    render() {
        const {todos,checkTodo,deleteTodo} = this.props 
        return (
            <ul className="todo-main">
                {
                    todos.map((todo)=>{
                        return <TodoItem key={todo.id} {...todo} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
                    })
                }
                
            </ul>
        )
    }
}

