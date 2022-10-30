import React from 'react';
import '../styles/Button.css';

function Botton (props) {

  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  }

  return(
    <div className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => props.addClick(props.children)}>
      {props.children}
    </div>
  )
}

export default Botton;