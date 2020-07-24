import React, { Component } from 'react';

class ClickButton extends Component{
    constructor(){
        super();
        this.state = {
            clickCounter: -1
        }
    }
    componentDidMount = ()  =>{
        let c = this.state.clickCounter + 1;
        this.setState(
            {clickCounter: c}
        ); 
    }
    reset = () =>{
        this.setState({clickCounter: 0})
    }
    rnd = () =>{
        return Math.floor((Math.random() * 256));
    }
    render(){
        return (
            <div>
                <button id="clickButton" onClick={this.componentDidMount} style={{background:`rgb(${[this.rnd(),this.rnd(),this.rnd()]})`,color:`rgb(${[this.rnd(),this.rnd(),this.rnd()]})`}}>{this.state.clickCounter}</button>
                <button id="clickButton" onClick={this.reset}>Reset</button>
            </div>
        );
    }
}
export default ClickButton;