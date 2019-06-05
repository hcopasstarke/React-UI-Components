import React from 'react';
import './App.scss';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <div className="row">
        <ActionButton text={'clear'} actionButtonStyle='font' />
        <NumberButton text={'÷'} buttonStyle='red' />
      </div>
      <div className="row">
        <NumberButton text={'7'} />
        <NumberButton text={'8'} />
        <NumberButton text={'9'} />
        <NumberButton text={'x'} buttonStyle='red' />
      </div>
      <div className="row">
        <NumberButton text={'4'} />
        <NumberButton text={'5'} />
        <NumberButton text={'6'} />
        <NumberButton text={'-'} buttonStyle='red' />
      </div>
      <div className="row">
        <NumberButton text={'1'} />
        <NumberButton text={'2'} />
        <NumberButton text={'3'} />
        <NumberButton text={'+'} buttonStyle='red' />
      </div>
      <div className="row">
        <ActionButton text={'0'} />
        <NumberButton text={'='} buttonStyle='red' />
      </div>
    </div>
  );
};

export default App;
