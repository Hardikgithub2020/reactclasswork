import React, { Component } from 'react';

class ClassTest extends Component {
    constructor(props){
      super(props)
      this.state ={
        make: 'BMW',
        model: 'X5',
        color : 'Black',
        year: '2020'
      }
    }
    colorChange = () =>{
        this.setState(
            {
                color: 'Red',
                year: '2021'
            }
        )
    }
    render(){
        return (
        <div className="App">
            <h1>Check out my Brand new Whip!</h1>
            <p>The car that I drive is a {this.state.make}</p>
            <p>I got the model {this.state.model}</p>
            <p>Smooth color of {this.state.color}</p>
            <p>And to top it all off the year {this.state.year} baby!....woohoo!</p>
            <button onClick={this.colorChange}>Click Me!</button>
        </div>
        );
    }
  }

  export default ClassTest;