import React from 'react';
import { TextareaProps } from './Textarea.props';

export default function Textarea({ value, onChange } : TextareaProps) {
    return (
        <div className="mb-4 relative">
            <label htmlFor="name" className="label font-light cursor-text">Detail</label>
            <textarea
                value={value}
                onChange={onChange}
                name="message" id="message" cols={18} rows={12}
                className="input border border-gray-400 appearance-none rounded
    w-full px-3 py-3 pb-2 focus focus:outline-none focus:border-indigo-600 
    focus:border-2 active:border-indigo-600 text-lg"></textarea>
        </div>
    );
}