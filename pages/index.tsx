import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import { useSelector } from 'react-redux';

export default function Home() {
  const loadingItemList = useSelector((state: any) => state.itemList);

  const [itemList, setItemList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const sortedItemList = [...itemList].sort((a: any, b: any) => a.time < b.time ? 1 : -1)

  useEffect(() => {
    setItemList(loadingItemList);
    setIsLoading(false);
  }, [loadingItemList]);

  return (
    isLoading ? <Layout>Loading...</Layout>
      :
      <Layout>
        <article className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-10">
          <div className="mx-auto flex flex-wrap flex-set">
            {sortedItemList && sortedItemList.map((item: any) => (
              <Link key={item.id}
                href={`/products/${item.id}`}
                passHref
                className="flex-item cursor-pointer
          mr-6 md:mr-8 lg:mr-10 
          mb-6 md:mb-8 lg:mb-10">
                <Image
                  src={item.photo}
                  alt={`Washing machine ${item.title}`}
                  width={800}
                  height={800}
                  className="border border-gray-800 hover:shadow-lg"
                  objectFit="cover"
                />
                <h2 className="text-sm md:text-base mt-2">{item.title}</h2>
              </Link>
            ))}
          </div>
        </article>
      </Layout>
  );
};