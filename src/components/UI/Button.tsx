import React from 'react';
import ButtonSt from '../../models/ButtonSt';

const Button: React.FC<{ but: ButtonSt; onClick: () => void }> = (props) => {
  return (
    <button
      type='button'
      id={props.but.id}
      className={`${props.but.bgColor} ${props.but.textColor} w-full h-full`}
      onClick={props.onClick}
    >
      {props.but.text}
    </button>
  );
};

export default Button;
