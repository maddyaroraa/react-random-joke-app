import React from 'react';
import './Button.css'; 
const Button = (props) => {
    const {className, onClick, children = 'submit' } = props;

    return <button type="button" onClick={() => onClick(Math.random())} className={`btn btn-primary ${className}`}> {children} </button>;
}
export default Button;