import React, { Component } from 'react';

class Burrito extends Component{
    render(){
        return(
        <h1>I love {this.props.flavor} burrito!</h1>
        );
    }
}
export default Burrito;