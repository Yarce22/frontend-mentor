import React from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full border h-14 pl-5 ${error ? 'text-Red border-2 border-Red placeholder-Red' : 'text-Dark-blue border border-[#DEDEDE] placeholder-Dark-blue-placeholder'} rounded-[5px]  font-semibold focus:border-Blue outline-none text-[14px]`}
      />
      {error && <p className='pt-1.5 italic text-Red font-medium text-[11px] text-end'>{error}</p>}
    </div>
  );
};

export { Input };