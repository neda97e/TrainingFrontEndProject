import Button from './Button';
import Input from './Input';
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
  const equallHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <div className='grid h-screen place-items-center'>
      <div className='border-2 border-neutral-200 shadow-md p-4 w-[400px] grid grid-cols-4 gap-x-3 gap-y-4'>
        <Input classes='border-2 border-neutral-200 h-[60px] col-span-4' />
        {calcButtons.map((btn) => {
          return <Button btn={btn} onClick={equallHandler} />;
        })}
      </div>
    </div>
  );
};

export default CalculatorPanel;
