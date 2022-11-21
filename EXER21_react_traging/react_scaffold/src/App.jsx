import React, { Component } from 'react'
import TodoHeader from './components/todoHeader/index.jsx'
import TodoList from './components/todoList/index.jsx'
import TodoFooter from './components/todoFooter/index.jsx'
import './app.css'

export default class App extends Component {
    state = {
        todos:[
            {id:'001',title:'eat',done:true},
            {id:'002',title:'sleep',done:false},
            {id:'003',title:'write program',done:false},
        ]
    }

    addTodo = (todoObj)=>{
        this.setState({todos:[todoObj,...this.state.todos]})
    }

    checkTodo = (id,done)=>{
        const newTodos = this.state.todos.map((todo)=>{
            if(todo.id === id){
                return {...todo,done}
            }
            else return todo
        })
        this.setState({todos:newTodos})
    }

    deleteTodo = (id)=>{
        const {todos} = this.state
        const newTodos = todos.filter((todo)=>{
            return todo.id !== id
        })
        this.setState({todos:newTodos})
    }

    checkAllTodos = (done)=>{
        const {todos} = this.state
        const newTodos = todos.map((todo)=>{
            return {...todo,done}
        })
        this.setState({todos:newTodos})
    }

    clearTodos = ()=>{
        const {todos} = this.state
        const newTodos = todos.filter((todo)=>{
            return !todo.done
        })
        this.setState({todos:newTodos})
    }

    render() {
        
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <TodoHeader addTodo={this.addTodo}/>
                    <TodoList todos={this.state.todos} checkTodo={this.checkTodo} deleteTodo={this.deleteTodo}/>
                    <TodoFooter todos={this.state.todos} checkAllTodos={this.checkAllTodos} clearTodos={this.clearTodos}/>
                </div> 
            </div>
        )
    }
}