import React from "react";
import Image from 'next/image'
import Link from 'next/link';
import { initialData } from "../initialData";
import Layout from '../components/layout';

export default function Home(props:any) {
  const { data } = props;
  return (
    <Layout>
      <div className="mx-auto flex flex-wrap flex-set">
        {data.map((post:any) => (
          <Link key={post.id}
          href={`/products/${post.id}`}
          passHref 
          className="flex-item cursor-pointer
          mr-6 md:mr-8 lg:mr-10 
          mb-6 md:mb-8 lg:mb-10">      
            <Image
                src={post.photo}
                alt={`Washing machine ${post.title}`}
                width={800}
                height={800}
                className="border border-gray-800"
                objectFit="cover"
              />
            <h2 className="
            text-sm
            md:text-base
            mt-2">{post.title}</h2>
            </Link>
        ))}
      </div>
        </Layout>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      data: initialData,
    },
  };
};
