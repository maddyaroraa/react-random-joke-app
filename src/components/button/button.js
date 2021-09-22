import React from 'react';
import Card from '../card/';
import './button.css'; 
const Button = (props) => {
    const {className } = props;
    

    // const buttonTrigger = () => {
    //     jokeTrigger(true)
    // }

    return <button type="button" onClick={() => props.updateState(Math.random())} className={`btn btn-primary ${className}`}> {props.children ?? 'Submit'} </button>;
}
export default Button;