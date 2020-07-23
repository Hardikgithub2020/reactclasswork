import React from 'react';

const DigitalNumber = (props) =>{
    let str = `${props.number}`;
    return (
    <div className="digits">{str.split('').length===1?'0'+str:str}</div>
    );
}
export default DigitalNumber;