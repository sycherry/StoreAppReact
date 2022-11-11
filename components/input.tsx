import React from 'react';

export default function Input(props: any) {
  const { value, onChange } = props
  return (
    <div className="mb-4 relative">
      <label htmlFor="name" className="label font-light cursor-text">Title</label>
      <input
        value={value}
        onChange={onChange}
        id="name" type="text" name="name"
        className="input border border-gray-400 appearance-none rounded w-full px-3 
    py-3 pb-2 focus focus:outline-none focus:border-indigo-600 focus:border-2  
    active:border-indigo-600 text-lg" autoFocus />


    </div>
  );
}