import React,{Component} from 'react';
import Hello from './Components/Hello'
import Welcome from './Components/Welcome'


export default class App extends Component{
    render(){
        return (
            <div>
                <Hello></Hello>
                <Welcome></Welcome>
            </div>
        )
    }
}