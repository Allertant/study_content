import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid'
import './index.css'

export default class todoHeader extends Component {

    static propTypes ={
        addTodo:PropTypes.func.isRequired
    }

    handleKeyUp = (event)=>{
        const {keyCode,target} = event
        if(keyCode === 13){
            if(!target.value.trim()) return alert('input cannot be empty')
            if(!window.confirm('be sure your input?')) return 
            this.props.addTodo({
                id:nanoid(),
                title:target.value.trim(),
                done:false
            })
            target.value = ''
        }
    }   

    render(){
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}

