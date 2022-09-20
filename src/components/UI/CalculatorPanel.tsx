import React, { useState, useRef } from 'react';
import Button from './Button';
// import Input from './Input';
import OPERATOR from '../../models/Operator';
import ButtonSt from '../../models/ButtonSt';
import BUTTONTYPE from '../../models/ButtonType';

const calcButtons = [
  new ButtonSt('op1', OPERATOR.SUM, BUTTONTYPE.OPERATOR),
  new ButtonSt('op2', OPERATOR.SUB, BUTTONTYPE.OPERATOR),
  new ButtonSt('op3', OPERATOR.MULT, BUTTONTYPE.OPERATOR),
  new ButtonSt('op4', OPERATOR.DIV, BUTTONTYPE.OPERATOR),
  new ButtonSt('num7', '7', BUTTONTYPE.OPERAND),
  new ButtonSt('num8', '8', BUTTONTYPE.OPERAND),
  new ButtonSt('num9', '9', BUTTONTYPE.OPERAND),
  new ButtonSt('op5', OPERATOR.EQU, BUTTONTYPE.OPERATOR),
  new ButtonSt('num4', '4', BUTTONTYPE.OPERAND),
  new ButtonSt('num5', '5', BUTTONTYPE.OPERAND),
  new ButtonSt('num6', '6', BUTTONTYPE.OPERAND),
  new ButtonSt('num1', '1', BUTTONTYPE.OPERAND),
  new ButtonSt('num2', '2', BUTTONTYPE.OPERAND),
  new ButtonSt('num3', '3', BUTTONTYPE.OPERAND),
  new ButtonSt('num0', '0', BUTTONTYPE.OPERAND),
  new ButtonSt('dot', '.', BUTTONTYPE.OPERAND),
  new ButtonSt('op6', OPERATOR.CLC, BUTTONTYPE.OPERATOR)
];

const CalculatorPanel = () => {
  // const inputRef = useRef<HTMLInputElement>(null);
  const [inputText, setInputText] = useState('');

  // const getInputText = () => {
  //   const enteredText = inputRef.current!.value;
  //   if (enteredText.trim().length === 0) return enteredText;
  // };

  const setInputTextValue = (text: string) => {
    setInputText(text);
  };

  const calculateResult = (textExpression: string) => {
    console.log(textExpression);
    return;
  };

  const buttonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    const type = button.value;
    const text = button.textContent;
    if (text === OPERATOR.CLC) {
      setInputTextValue('');
    } else if (text === OPERATOR.EQU) {
      const inputValue = inputText.concat(text!);
      calculateResult(inputValue);
    } else if (type === BUTTONTYPE.OPERATOR) {
      console.log(inputText);
      console.log(text);
      console.log(inputText.concat(text!));
      const inputValue = inputText.concat(text!);
      setInputTextValue(inputValue);
      calculateResult(inputValue);
    } else {
      const inputValue = inputText + text?.trim;
      setInputTextValue(inputValue);
    }
  };

  return (
    <div className='grid h-screen place-items-center'>
      <div className='border-2 border-neutral-200 shadow-md p-4 w-[400px] grid grid-cols-4 gap-x-3 gap-y-4'>
        {/* <Input classes='border-2 border-neutral-200 h-[60px] col-span-4' /> */}
        <input
          className='px-3 border-2 border-neutral-200 h-[60px] col-span-4'
          // ref={inputRef}
          type='text'
          value={inputText}
          readOnly
        />
        {calcButtons.map((btn) => {
          return (
            <Button btn={btn} key={btn.key} onClick={buttonClickHandler} />
          );
        })}
      </div>
    </div>
  );
};

export default CalculatorPanel;
