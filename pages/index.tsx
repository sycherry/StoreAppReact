import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import { useSelector } from 'react-redux';
import LoadingIndicator from "../components/LoadingIndicator";
import { useRouter } from 'next/router';

export default function Home() {
  const loadingItemList = useSelector((state: any) => state.itemList);

  const [itemList, setItemList] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const sortedItemList = loadingItemList.sort((a: any, b: any) => new Date(a.time) < new Date(b.time) ? 1 : -1);
    setItemList(sortedItemList);
    setIsLoading(false);
  }, [loadingItemList]);

  return (
    isLoading ? <Layout><LoadingIndicator /></Layout> :
      <Layout>
        <article className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-10">
          {itemList.length === 0 ?
            <div className="my-48">
              <p className="text-center">Please create item🌈🌺</p>
            </div>
            :
            <div className="mx-auto flex flex-wrap flex-set">
              {itemList.map((item: any) => (
                <Link
                  key={item.id}
                  href={`/products/${item.id}`}
                  passHref
                  className="flex-item cursor-pointer 
                  mr-6 md:mr-8 lg:mr-10 mb-6 md:mb-8 lg:mb-10">
                  <Image
                    src={item.photo}
                    alt={`Washing machine ${item.title}`}
                    width={800}
                    height={800}
                    className="border border-gray-800 hover:shadow-lg"
                  />
                  <h2 className="text-sm md:text-base mt-2">{item.title}</h2>
                </Link>
              ))}
            </div>
          }
        </article>
      </Layout>
  );
};