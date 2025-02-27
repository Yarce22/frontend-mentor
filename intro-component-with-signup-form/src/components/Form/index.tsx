import React, { useState } from 'react';
import { Input } from "../Input"

interface InputState {
  type: string;
  placeholder: string;
  value: string;
}

interface ErrorState {
  [key: string]: string;
}

const initialForm = [
  { type: 'text', placeholder: 'First Name', value: '' },
  { type: 'text', placeholder: 'Last Name', value: '' },
  { type: 'email', placeholder: 'Email Address', value: '' },
  { type: 'password', placeholder: 'Password', value: '' },
]

const Form = () => {
  const [inputs, setInputs] = useState<InputState[]>(initialForm);
  const [errors, setErrors] = useState<ErrorState>({});

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { placeholder, value } = e.target;
    const updatedInputs = inputs.map((input) =>
      input.placeholder === placeholder ? { ...input, value } : input
    );
    setInputs(updatedInputs);

    setErrors({ ...errors, [placeholder]: '' });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: ErrorState = {};
    let hasErrors = false;

    inputs.forEach((input) => {
      if (input.value.trim() === '') {
        hasErrors = true;
        newErrors[input.placeholder] = `${input.placeholder} cannot be empty`;
      }
      if (input.placeholder === 'Address Email' && !isValidEmail(input.value)) {
        hasErrors = true;
        newErrors[input.placeholder] = 'Looks like this is not an email';
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    alert('Formulario enviado');
    setErrors({});
    setInputs(initialForm)
  };
  return (
    <>
      <section className='grid place-content-center'>
        <div className='max-w-[327px] py-4 px-[66px] mb-[24px] text-center bg-Blue rounded-[10px] shadow-boxes'>
          <p className='italic'>
            <span className='font-bold'>Try it free 7 days</span> then $20/mo. thereafter
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col p-6 bg-white rounded-[10px] gap-4 shadow-boxes">
          {inputs.map(({ type, placeholder, value }) => (
            <Input
              key={placeholder}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={handleInput}
              error={errors[placeholder]}
            />
          ))}

          <button className='w-full h-14 bg-Green rounded-[10px] font-semibold text-[15px] tracking-[1px] inset-shadow-button'>CLAIM YOUR FREE TRIAL</button>
          <p className='font-medium text-[11px] text-Grayish-blue text-center mx-[15px]'>
            By clicking the button, you are agreeing to our{' '}
            <span className='font-bold cursor-pointer text-Red leading-[21px]'>Terms and Services</span>
          </p>
        </form>
      </section>
    </>
  )
}

export { Form }