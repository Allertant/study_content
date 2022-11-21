import React, { Component } from 'react';
import './index.css'

export default class todoItem extends Component {
    state={
        mouseIn:false
    }

    deleteTodo = (id)=>{
        return ()=>{
            if(window.confirm('Are you sure you want to delete?'))
                this.props.deleteTodo(id)
        }
    }

    handleCheck = (id)=>{
        return (event)=>{
            this.props.checkTodo(id,event.target.checked)
        }
    }

    handleMouse = (mouseIn)=>{
        return ()=>{
            this.setState({mouseIn})
        }
    }

    render() {
        const {id,title,done} = this.props
        const {mouseIn} = this.state
        return (
            <li style={{backgroundColor:mouseIn ? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{title}</span>
                </label>
                <button className="btn btn-danger" style={{display:mouseIn?'block':'none'}} onClick={this.deleteTodo(id)}>删除</button>
            </li>
        )
    }
}

