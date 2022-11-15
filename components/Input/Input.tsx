import React from 'react';
import { InputProps } from './Input.props';

export default function Input({ value, onChange, onBlur, errors, touched }: InputProps) {
  return (
    <div className="mb-4 relative">
      <label htmlFor="name" className="label font-light cursor-text">Title</label>
      <input
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        name="title"
        className="input border border-gray-400 appearance-none rounded w-full px-3 
    py-3 pb-2 focus focus:outline-none focus:border-indigo-600 focus:border-2  
    active:border-indigo-600 text-lg" autoFocus />
      {errors && touched ? (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">Oops! </span>
          {errors}!</p>
      ) : null}
    </div>
  );
};