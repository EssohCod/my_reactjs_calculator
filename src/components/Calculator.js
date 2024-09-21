import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import './Calculator.css';
import { evaluate } from 'mathjs';
const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setInput(evaluate(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="buttons">
        {['1', '2', '3', '+'].map(label => (
          <Button key={label} onClick={() => handleButtonClick(label)} label={label} className={label === '+' ? 'button-operator' : ''} />
        ))}
        {['4', '5', '6', '-'].map(label => (
          <Button key={label} onClick={() => handleButtonClick(label)} label={label} className={label === '-' ? 'button-operator' : ''} />
        ))}
        {['7', '8', '9', '*'].map(label => (
          <Button key={label} onClick={() => handleButtonClick(label)} label={label} className={label === '*' ? 'button-operator' : ''} />
        ))}
        {['C', '0', '=', '/'].map(label => (
          <Button key={label} onClick={() => handleButtonClick(label)} label={label} className={['C', '=', '/'].includes(label) ? 'button-operator' : ''} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
