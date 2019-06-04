import React from 'react';
import './Button.scss';


const NumberButton = props => {
    return (
    <button className={props.buttonStyle}>{props.text}</button>
    );
}

NumberButton.defaultProps = {
    buttonStyle: 'numberButton'
}

export default NumberButton; 