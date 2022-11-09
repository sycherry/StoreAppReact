import React, { useState, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link';
import { initialData } from "../initialData";
import Layout from '../components/layout';
import { useRouter } from "next/router";

export default function Home(props: any) {
  const { data } = props;

  const [updateData, setUpdateData] = useState(data)
  const router = useRouter()

  // console.log("router.query",router.query)

  const generateId = () => {
    return Date.now().toString() + "_" + (Math.random() * 1e6).toFixed(0).toString();
  };

  useEffect(() => {
    // create
    setUpdateData([...updateData, {
      photo: "http://localhost:3000/washing.jpg",
      detail: router.query.detail,
      title: router.query.title,
      id: generateId()
    }]);

    // remove
    setUpdateData(data => data.filter((data) => data.id !== router.query.id));

    if(router.pathname.startsWith('/edit')){
      const newData = data.map(item => {
        if (item.id == router.query.id) {
          return {
            photo: "http://localhost:3000/washing.jpg",
            id: router.query.id,
            title: router.query.title,
            detail: router.query.detail
          };
        }
        return item;
      });
      setUpdateData(newData);
    }


  }, [router.query])

  return (
    <Layout>
      <article className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="mx-auto flex flex-wrap flex-set">
          {updateData.map((post: any) => (
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
                className="border border-gray-800 hover:shadow-lg"
                objectFit="cover"
              />
              <h2 className="text-sm md:text-base mt-2">{post.title}</h2>
            </Link>
          ))}
        </div>
      </article>
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
