import React from 'react';
import Link from 'next/link';
import { BreadcrumbProps } from './Breadcrumb.props';

export default function Breadcrumb({ post }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol role="list" className="mx-auto flex max-w-2xl items-center 
        space-x-2 lg:max-w-7xl">
        <li>
          <div className="flex items-center">
            <Link href="/"
              className="mr-2 text-sm 
              font-medium text-gray-900">HOME</Link>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>

        <li className="text-sm">
          <a href={`products/${post.id}`} aria-current="page" className="font-medium text-gray-500 
            hover:text-gray-600">{post.title}</a>
        </li>
      </ol>
    </nav>
  );
};