import React from 'react';

export default function Textarea(props: any) {
    const { value, onChange } = props
    return (
        <div className="mb-4 relative">
            <textarea
                value={value}
                onChange={onChange}
                name="message" id="message" cols={18} rows={12}
                className="input border border-gray-400 appearance-none rounded
    w-full px-3 py-3 pt-5 pb-2 focus focus:outline-none focus:border-indigo-600 
    focus:border-2 active:border-indigo-600 text-lg"></textarea>
            <label htmlFor="message" className="label font-light absolute mb-0 -mt-2 pt-4 pl-3 
    leading-tighter text-gray-400 cursor-text">Detail</label>
        </div>
    );
}