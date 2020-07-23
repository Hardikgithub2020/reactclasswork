import React, {Component} from 'react';
import Burrito from './Burrito';

class Toppings extends Component{
    render(){
        const flavors = ['Beans','Steak','Rice'];
        return (
            <div>
                <Burrito flavor={flavors[0]} />
                <Burrito flavor={flavors[1]} />
                <Burrito flavor={flavors[2]} />
            </div>
        );
    }
}
export default Toppings;