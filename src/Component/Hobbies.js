import React from 'react';

const Hobbies = (props) => {

    return (
        <div className="hobbyCard">
            <h2>{props.name}</h2>
            <img src={props.url} alt={props.name + " image"} />
            <p>{props.desc}</p>
        </div>
    );
}
export default Hobbies;