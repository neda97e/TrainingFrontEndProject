import React, { useState } from 'react';
import Button from './Button';
import Operator from '../models/Operator';
import ButtonSt from '../models/ButtonSt';
import ButtonType from '../models/ButtonType';

const fourMainOps: string[] = Object.values(Operator).slice(0, 4);

const calcButtons: ButtonSt[] = [
  new ButtonSt(Operator.SUM, ButtonType.OPERATOR),
  new ButtonSt(Operator.SUB, ButtonType.OPERATOR),
  new ButtonSt(Operator.MULT, ButtonType.OPERATOR),
  new ButtonSt(Operator.DIV, ButtonType.OPERATOR),
  new ButtonSt('7', ButtonType.OPERAND),
  new ButtonSt('8', ButtonType.OPERAND),
  new ButtonSt('9', ButtonType.OPERAND),
  new ButtonSt(Operator.EQU, ButtonType.OPERATOR),
  new ButtonSt('4', ButtonType.OPERAND),
  new ButtonSt('5', ButtonType.OPERAND),
  new ButtonSt('6', ButtonType.OPERAND),
  new ButtonSt('1', ButtonType.OPERAND),
  new ButtonSt('2', ButtonType.OPERAND),
  new ButtonSt('3', ButtonType.OPERAND),
  new ButtonSt('0', ButtonType.OPERAND),
  new ButtonSt('.', ButtonType.OPERAND),
  new ButtonSt(Operator.CLC, ButtonType.OPERATOR)
];

const CalculatorPanel = () => {
  const [inputText, setInputText] = useState<string>('');

  const getIndexOfOperator = () => {
    const results: string[] = fourMainOps.filter(
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
      case Operator.SUM:
        return firstNumber + secondNumber;
      case Operator.SUB:
        return firstNumber - secondNumber;
      case Operator.DIV:
        return firstNumber / secondNumber;
      case Operator.MULT:
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
    if (text === Operator.CLC) {
      setInputText('');
    }
    // When press '='
    else if (text === Operator.EQU) {
      if (inputText.length > 0) {
        const calculationRes: number = calculateResult(-1)!;
        setInputText(calculationRes.toString());
      }
    }
    // When press '+', '-', 'x', '÷'
    else if (type === ButtonType.OPERATOR) {
      // User can't import operator at begining or after another operator
      if (inputText.length > 0 && !fourMainOps.includes(inputText.slice(-1))) {
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
