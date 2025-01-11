// src/components/Button.js
import React from 'react';

const Button = ({ label, variant, onClick }) => {
  const buttonStyles = {
    default: 'bg-blue-500 text-white p-2 rounded',
    danger: 'bg-red-500 text-white p-2 rounded',
    success: 'bg-green-500 text-white p-2 rounded',
    outline: 'bg-transparent text-blue-500 border-2 border-blue-500 p-2 rounded',
  };

  return (
    <button 
      className={buttonStyles[variant] || buttonStyles.default} 
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
