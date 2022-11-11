import React from 'react';

export default function Input(props: any) {
    const { value, onChange } = props
    return (
        <div className="mb-4 relative">
        <input
            value={value}
            onChange={onChange}
            id="name" type="text" name="name"
            className="input border border-gray-400 appearance-none rounded w-full px-3 
    py-3 pt-5 pb-2 focus focus:outline-none focus:border-indigo-600 focus:border-2  
    active:border-indigo-600 text-lg" autoFocus />

        <label htmlFor="name" className="label font-light absolute mb-0 -mt-2 pt-4 pl-3 
    leading-tighter text-gray-400 cursor-text">Title</label>
    </div>
    );
}