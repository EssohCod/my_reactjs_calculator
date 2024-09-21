import React from 'react';
import './Button.css';

const Button = ({ onClick, label, className }) => {
  return (
    <button className={className} onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default Button;
