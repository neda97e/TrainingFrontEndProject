import React, { useState, useRef } from 'react';

const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputText, setInputText] = useState('');

  const getInputText = () => {
    const enteredText = inputRef.current!.value;
    if (enteredText.trim().length === 0) return;
  };

  const setInputTextValue = (text: string) => {
    setInputText(text);
  };

  return (
    <input
      className='border-gray-500'
      ref={inputRef}
      type='text'
      value={inputText}
    />
  );
};

export default Input;
