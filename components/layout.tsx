import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import Header from './header'
import Footer from './footer'
import FloationgActionButton from './floationg-action-button'

export default function Layout(props: any) {
    const { children } = props
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