import React from 'react';
import Link from 'next/link';

export default function Header(props: any) {
    const { router } = props
    return (
        <header className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-10 my-10">
            {router.pathname === '/' || router.pathname.startsWith('/products') ?
                <>
                    <Link className="cursor-pointer" href={`/`}>
                        <h1 className="
        text-4xl md:text-5xl lg:text-6xl mb-4 text-center">Washing mashine store</h1>
                    </Link>
                    <p className="mb-1 text-center">This is demo apprication,
                        you can create, update, delete item.
                        <span className="md:block ml-1 md:ml-0">Let&apos;s try🙌</span></p>
                </>
                :
                <Link className="cursor-pointer" href={`/`}>
                    <h1 className="text-sm md:text-base lg:text-3xl mb-4">Washing mashine store</h1>
                </Link>
            }
        </header>
    );
}