import React, { useState } from 'react';
import Button from './Button';
import OPERATOR from '../../models/Operator';
import ButtonSt from '../../models/ButtonSt';
import BUTTONTYPE from '../../models/ButtonType';

const operators: string[] = [
  OPERATOR.SUM,
  OPERATOR.SUB,
  OPERATOR.MULT,
  OPERATOR.DIV
];

const calcButtons: ButtonSt[] = [
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
  const [inputText, setInputText] = useState('');

  const getIndexOfOperator = () => {
    const results = operators.filter(
      (operator) => inputText.indexOf(operator) > 0
    );
    return results.length > 0 ? inputText.indexOf(results[0]) : -1;
  };

  const calculateResult = (operationIndex: number) => {
    if (operationIndex < 0) {
      operationIndex = getIndexOfOperator();
    }
    const firstNumber: number = Number(inputText.substring(0, operationIndex));
    const secondNumber: number = Number(
      inputText.substring(operationIndex + 1, inputText.length)
    );
    const operator: string = inputText.substring(
      operationIndex,
      operationIndex + 1
    );
    switch (operator) {
      case OPERATOR.SUM:
        return firstNumber + secondNumber;
      case OPERATOR.SUB:
        return firstNumber - secondNumber;
      case OPERATOR.DIV:
        return firstNumber / secondNumber;
      case OPERATOR.MULT:
        return firstNumber * secondNumber;
    }
  };

  // Ves: Sorry, I had to write some comments to understand your logic! :D
  const buttonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    const type: string = button.value;
    const text: string = button.textContent!;

    // When press 'C'
    if (text === OPERATOR.CLC) {
      setInputText('');
    }
    // When press '='
    else if (text === OPERATOR.EQU) {
      if (inputText.length > 0) {
        const calculationRes: number = calculateResult(-1)!;
        setInputText(calculationRes.toString());
      }
    }
    // When press '+', '-', 'x', '÷'
    else if (type === BUTTONTYPE.OPERATOR) {
      // User can't import operator at begining or after another operator
      if (inputText.length > 0 && !operators.includes(inputText.slice(-1))) {
        // If there is an operator in the expression it goes for calculation
        // then setting new operation
        const index: number = getIndexOfOperator();
        if (index > 0) {
          const calculationRes: number = calculateResult(index)!;
          setInputText(calculationRes.toString());
        }
        setInputText((_inputText) => `${_inputText}${text}`);
      }
    }
    // When press number
    else {
      setInputText((_inputText) => `${_inputText}${text}`);
    }
  };

  return (
    <div className='grid h-screen place-items-center'>
      <div className='border-2 border-neutral-200 shadow-md p-4 w-[400px] grid grid-cols-4 gap-x-3 gap-y-4'>
        <input
          className='px-3 border-2 border-neutral-200 h-[60px] col-span-4'
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
