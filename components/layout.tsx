import React from 'react';
import Link from 'next/link';
import ScrollToTop from './scroll-to-top'
import Head from 'next/head'
import FloationgActionButton from './floationg-action-button'
import { useRouter } from 'next/router';

export default function Layout({ children }) {
    const router = useRouter();
    console.log("router.pathname", router)
    return (
        <div>
            <Head>
                <title>Washing mashine store</title>
                <meta name="description" content="This is demo apprication, you can create, update, delete productLet's try" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-10 my-10">

                {router.pathname === '/' || router.pathname.startsWith('/products') ?
                    <>
                        <Link className="cursor-pointer" href={`/`}>
                            <h1 className="
                text-4xl md:text-5xl lg:text-6xl mb-4 text-center">Washing mashine store</h1>
                        </Link>
                        <p className="mb-1 text-center">This is demo apprication,
                            you can create, update, delete product.
                            <span className="md:block ml-1 md:ml-0">Let&apos;s try🙌</span></p>
                    </>
                    :
                    <Link className="cursor-pointer" href={`/`}>
                        <h1 className="text-sm md:text-base lg:text-3xl mb-4">Washing mashine store</h1>
                    </Link>
                }
            </header>

            <main>{children}</main>

            <footer className="mt-10 mb-6 md:mb-8 lg:mb-10 text-center">
                <ScrollToTop />
                <p className="text-sm">
                    &copy; 2022 <Link className="hover:underline" href={`/`}>Sayadesign.art</Link>
                </p>
            </footer>

            <Link className="cursor-pointer" href="/create"><FloationgActionButton /></Link>
        </div>
    );
}