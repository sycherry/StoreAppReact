import React, { FC, useState, useEffect } from "react";
import Layout from '../../components/layout'
import Button from '../../components/button'
import UploadImage from '../../components/uploadImage'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { updateItemList, removeItemList } from '../../store/itemList/action'

export default function EditItem() {

    const router = useRouter();
    const dispatch = useDispatch();
    const loadingItemList = useSelector((state: any) => state.itemList);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const { id } = router.query;
        const newTodoList = loadingItemList.filter((item: any) => item.id == id)
        setTitle(newTodoList[0]?.title);
        setDetail(newTodoList[0]?.detail);
        setIsLoading(false);
    }, [router.isReady, router.query, loadingItemList])

    const [files, setFiles] = useState([])
    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')

    const inputTextChange = (e: any) => {
        setTitle(e.target.value)
    }
    const textAreaDetailChange = (e: any) => {
        setDetail(e.target.value)
    }

    const updateItem = () => {

        updateItemList({
            id: Object(router.query.id),
            title,
            detail,
            photo: "/washing.jpg",
            time: new Date().toLocaleString(),
        })
        router.push({ pathname: '/', })
    }

    const removeItem = () => {
        removeItemList({
            id: Object(router.query.id),
            title: '',
            detail: '',
            photo: "",
            time: "",
        })
        router.push({ pathname: '/' })
    }
    return (
        isLoading ? <Layout>Loading...</Layout>
            :

            <Layout>
                <article className="max-w-screen-md mx-auto px-6 md:px-8 lg:px-10">
                    <div className="text-4xl text-center mb-4">Edit item</div>
                    <button type="button" onClick={() => router.back()}>←Back</button>


                    <UploadImage />

                    <div className="mb-4 relative">
                        <input
                            value={title}
                            onChange={inputTextChange}
                            id="name" type="text" name="name"

                            className="input border border-gray-400 appearance-none rounded w-full px-3 
                py-3 pt-5 pb-2 focus focus:outline-none focus:border-pink-600 focus:border-2  
                active:border-pink-600 text-lg" autoFocus />

                        <label htmlFor="name" className="label font-light absolute mb-0 -mt-2 pt-4 pl-3 
                leading-tighter text-gray-400 mt-2 cursor-text">Title</label>
                    </div>

                    <div className="mb-4 relative">
                        <textarea
                            value={detail}
                            onChange={textAreaDetailChange}
                            name="message" id="message" cols={18} rows={12}
                            className="input border border-gray-400 appearance-none rounded
                w-full px-3 py-3 pt-5 pb-2 focus focus:outline-none focus:border-pink-600 
                focus:border-2 active:border-pink-600 text-lg"></textarea>
                        <label htmlFor="message" className="label font-light absolute mb-0 -mt-2 pt-4 pl-3 
                leading-tighter text-gray-400 mt-2 cursor-text">Detail</label>
                    </div>

                    <Button
                        onClick={() => updateItem()}
                        text={"Update item"}
                        type={"default"} />
                    <Button
                        onClick={() => removeItem()}
                        text={"Remove item"}
                        type={"text"} />
                </article>
            </Layout>
    );
}
