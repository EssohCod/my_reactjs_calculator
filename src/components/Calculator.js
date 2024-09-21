import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const calculateResult = (expression) => {
    try {
      return Function(`"use strict"; return (${expression})`)();
    } catch (error) {
      return 'Error';
    }
  };

  const handleButtonClick = (value) => {
    if (value === '=') {
      setInput(calculateResult(input).toString());
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
          <Button
            key={label}
            onClick={() => handleButtonClick(label)}
            label={label}
            className={label === '+' ? 'button-operator' : ''}
          />
        ))}
        {['4', '5', '6', '-'].map(label => (
          <Button
            key={label}
            onClick={() => handleButtonClick(label)}
            label={label}
            className={label === '-' ? 'button-operator' : ''}
          />
        ))}
        {['7', '8', '9', '*'].map(label => (
          <Button
            key={label}
            onClick={() => handleButtonClick(label)}
            label={label}
            className={label === '*' ? 'button-operator' : ''}
          />
        ))}
        {['C', '0', '=', '/'].map(label => (
          <Button
            key={label}
            onClick={() => handleButtonClick(label)}
            label={label}
            className={['C', '=', '/'].includes(label) ? 'button-operator' : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
