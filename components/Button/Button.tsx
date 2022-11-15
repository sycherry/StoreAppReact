import React from 'react';
import { ButtonProps } from './Button.props';

export default function Button({ text, onClick = null, type }: ButtonProps) {
    return (
        <>
            {type == "default" &&
                <button
                    type="submit"
                    onClick={onClick}
                    className="mt-10 flex w-full items-center justify-center rounded-md 
        border border-transparent bg-indigo-600 py-3 px-8 text-base 
        font-medium text-white hover:bg-indigo-700 focus:outline-none 
        focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    {text}</button>}

            {type == "text" &&
                <button
                    type="submit"
                    onClick={onClick}
                    className="mt-10 flex w-full items-center justify-center rounded-md 
border border-transparent bg-white-600 py-3 px-8 text-base text-indigo-600
font-medium text-white hover:bg-indigo-200 focus:outline-none 
focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    {text}</button>}
        </>
    );
}