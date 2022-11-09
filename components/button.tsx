import React from 'react';
import Link from 'next/link';

export default function Button({post,text,onClick}) {
    return (
        <Link href={`/edit/${post.id}`} passHref onClick={onClick}>
        <p className="mt-10 flex w-full items-center justify-center rounded-md 
        border border-transparent bg-indigo-600 py-3 px-8 text-base 
        font-medium text-white hover:bg-indigo-700 focus:outline-none 
        focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          {text}</p></Link>
    );
}