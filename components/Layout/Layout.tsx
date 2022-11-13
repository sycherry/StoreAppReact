import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import Header from './Header'
import Footer from './Footer/Footer'
import FloationgActionButton from './Floationg-action-button'
import { LayoutProps } from './LayoutProps';

export default function Layout( {children} : LayoutProps) {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>Washing mashine store</title>
                <meta name="description" content="This is demo apprication, you can create, update, delete productLet's try" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header router={router} />
            <main>{children}</main>
            <Footer />
            <FloationgActionButton router={router} />
        </div>
    );
}