import React, { Component } from 'react';
import DigitalNumber from './DigitalNumber';

class DigitalClock extends Component{
    constructor(){
        super();
        this.state = {
            hours:0,
            minutes:0,
            seconds:0,
            timer:null
        }
    }
    updateHours = () =>{
        let hr = this.state.hours + 1;
        this.setState(
            {hours: hr}
        );
    }
    updateMinutes = () =>{
        let mn = this.state.minutes + 1;
        this.setState(
            {minutes: mn}
        );
    }
    updateSeconds = () =>{
        let sd = this.state.seconds + 1
        this.setState(
            {seconds: sd}
        );
    }
    startClock = () =>{
        this.setState(
            {timer:setInterval(()=>this.updateClock(),1000)}
        );
    }
    pauseClock = () =>{
        clearInterval(this.state.timer);
    }
    resetClock = () =>{
        this.pauseClock();
        this.setState(
            {
                hours: 0,
                minutes: 0,
                seconds: 0
            }
        )
    }
    updateClock = () =>{
        this.updateSeconds();
        if (this.state.seconds === 60){
            this.setState(
                {seconds:0}
            )
            this.updateMinutes();
        }
        if (this.state.minutes === 60){
            this.setState(
                {minutes:0}
            )
            this.updateHours();
        }
    }
    render(){
        return(
            <div className="ClockWall">
                <div className="stopWatch">
                    <DigitalNumber number={this.state.hours} /><span>:</span>
                    <DigitalNumber number={this.state.minutes} /><span>:</span>
                    <DigitalNumber number={this.state.seconds} />
                </div>
                <div className="controls">
                    <button onClick={this.startClock}>></button>
                    <button onClick={this.pauseClock}>||</button>
                    <button onClick={this.resetClock}>[]</button>
                </div>
            </div>
        );
    }
}

export default DigitalClock;