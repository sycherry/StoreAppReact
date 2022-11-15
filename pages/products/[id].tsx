import React ,{ useEffect, useState } from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout/Layout';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Button from '../../components/Button/Button';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { ItemType } from '../../models/ItemType';

export default function ProductItem() {
  const router = useRouter();
  const loadingItemList = useSelector((state:any) => state.itemList);

  const [item, setItem] = useState<ItemType>({
    title: '',
    id: '',
    photo: '',
    detail: ''
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const toEdit = (id:string) => {
    router.push({ pathname: `/edit/${id}` });
  };

  useEffect(() => {
    const { id } = router.query;
    const newTodoList = loadingItemList.filter((item:ItemType) => item.id == id);
    setItem(newTodoList[0]);
    setIsLoading(false);
  }, [loadingItemList, router.isReady, router.query]);

  return (
    isLoading ? <Layout><p>Loading...</p></Layout>
      :
      <Layout>
        <article className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-10">
          <Breadcrumb
            post={item} />

          <div className="md:flex md:flex-row">
            <div className="md:basis-1/2 mb-6 md:mb-0">
              <Image
                src={item.photo}
                alt={`Washing machine ${item.title}`}
                width={800}
                height={800}
                className="border border-gray-800"
                objectFit="cover"
              />
            </div>

            <div className="md:basis-1/2 md:pl-8 lg:pl-10">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 mb-4">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {item.title}</h1>
              </div>

              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{item.detail}</p>
                </div>
              </div>

              <Button
                onClick={() => toEdit(item.id)}
                text={"Edit item"}
                type={"default"} />

            </div>
          </div>
        </article>
      </Layout>
  );
}