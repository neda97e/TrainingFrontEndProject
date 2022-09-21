import React from 'react';
import ButtonSt from '../../models/ButtonSt';
import BUTTONTYPE from '../../models/ButtonType';
import OPERATOR from '../../models/Operator';

const Button: React.FC<{
  btn: ButtonSt;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}> = (props) => {
  const getButtonClasses = () => {
    if (
      props.btn.type === BUTTONTYPE.OPERATOR &&
      props.btn.text === OPERATOR.EQU
    ) {
      return 'text-white border-2 border-blue-600 bg-blue-500 row-span-4';
    } else if (
      props.btn.type === BUTTONTYPE.OPERATOR &&
      props.btn.text === OPERATOR.CLC
    ) {
      return 'text-neutral-700 border-2 border-neutral-200 bg-neutral-100 h-[50px]';
    } else if (props.btn.type === BUTTONTYPE.OPERATOR) {
      return 'text-neutral-700 border-2 border-neutral-400 bg-neutral-300 h-[50px]';
    } else {
      return 'text-neutral-700 border-2 border-neutral-200 bg-neutral-100 h-[50px]';
    }
  };

  return (
    <button
      type='button'
      id={props.btn.key}
      value={props.btn.type}
      className={getButtonClasses()}
      onClick={props.onClick}
    >
      {props.btn.text}
    </button>
  );
};

export default Button;
