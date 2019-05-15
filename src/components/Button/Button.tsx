import React, { FunctionComponent } from 'react';
import './Button.css';

interface ButtonsProps {
  onClick?: () => void;
}

const Button: FunctionComponent<ButtonsProps> = ({ children }) => (
  <button className="Button" type="button">
    {children}
  </button>
);

export default Button;
