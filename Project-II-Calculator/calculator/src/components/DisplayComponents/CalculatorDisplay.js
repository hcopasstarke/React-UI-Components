import React from 'react';
import './Display.scss';


const CalculatorDisplay = () => {
    return (
    <div className="calcDisplay">0</div>
    );
};

CalculatorDisplay.defaultProps = {
    calculatorDisplayStyle: 'calculatorDisplay'
}

export default CalculatorDisplay;