import Button from './Button';

const CalculatorPanel = () => {
  const equallHandler = (event: React.FormEvent) => {
    event.preventDefault();
    return;
  };

  return (
    <div className='grid h-screen place-items-center'>
      <div className='border-gray-500 p-3 w-[400px] grid grid-cols-4 gap-x-3 gap-y-4'>
        <div className='border min-h-[60px] col-span-4'></div>
        <div className='bg-gray-400 min-h-[50px]'></div>
        <div className='bg-gray-700 min-h-[50px]'></div>
        <div className='bg-gray-700 min-h-[50px]'></div>
        <div className='bg-gray-700 min-h-[50px]'></div>
        <div className='bg-gray-700 min-h-[50px]'></div>
        <div className='bg-gray-700 min-h-[50px]'></div>
        <div className='bg-gray-700 min-h-[50px]'></div>
        <div className='bg-gray-700 min-h-[50px] row-span-4'></div>
        <div className='bg-gray-700 min-h-[50px]'></div>
        <div className='bg-gray-700 min-h-[50px]'></div>
        <div className='bg-gray-700 min-h-[50px]'></div>
        <div className='bg-gray-700 min-h-[50px]'></div>
        <div className='bg-gray-700 min-h-[50px]'></div>
        <div className='bg-gray-700 min-h-[50px]'></div>
        <div className='bg-gray-700 min-h-[50px]'></div>
        <div className='bg-gray-700 min-h-[50px]'></div>
        <div className='bg-gray-700 min-h-[50px]'></div>
      </div>
    </div>
  );
};

export default CalculatorPanel;
