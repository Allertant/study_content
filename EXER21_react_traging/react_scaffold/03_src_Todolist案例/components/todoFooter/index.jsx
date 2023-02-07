import React, { Component } from 'react';
import './index.css'

export default class todoFooter extends Component {

    checkAllTodos = (event)=>{
        this.props.checkAllTodos(event.target.checked)
    }

    clearTodos = ()=>{
        this.props.clearTodos()
    }

    render() {
        const {todos} = this.props
        const finished = todos.reduce((pre,curr)=>pre+curr.done,0)
        const total = todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.checkAllTodos} checked={finished===total && total!==0 ? true:false} />
                </label>
                <span>
                    <span>已完成 {finished}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.clearTodos}>清除已完成任务</button>
            </div>
        )
    }
}

