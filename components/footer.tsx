import React from 'react';
import ScrollToTop from './scroll-to-top'
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="mt-10 mb-6 md:mb-8 lg:mb-10 text-center">
            <ScrollToTop />
            <p className="text-sm">
                &copy; 2022 <Link className="hover:underline" href={`/`}>Sayadesign.art</Link>
            </p>
        </footer>
    );
}