import React, { useState } from "react";
import Layout from '../components/layout'
import Button from '../components/button'
import { useRouter } from 'next/router';
import UploadImage from '../components/uploadImage'

export default function CreateItem() {
    const router = useRouter();
    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')

    const inputTextChange = (e: any) => {
        setTitle(e.target.value)
    }
    const textAreaDetailChange = (e: any) => {
        setDetail(e.target.value)
    }
    const createItem = () => {
        router.push(
            {
              pathname: '/',
              query: { title: title, detail: detail },
            }, '/', )
    }
    return (
        <Layout>
            <article className="max-w-screen-md mx-auto px-6 md:px-8 lg:px-10">
                <div className="text-4xl text-center mb-4">Create item</div>
                <button type="button" onClick={() => router.back()}>←Back</button>
                <UploadImage />

                <div className="mb-4 relative">
                    <input
                        value={title}
                        onChange={inputTextChange}
                        id="name" type="text" name="name"
                        className="input border border-gray-400 appearance-none rounded w-full px-3 
                py-3 pt-5 pb-2 focus focus:outline-none focus:border-indigo-600 focus:border-2  
                active:border-indigo-600 text-lg" autoFocus />

                    <label for="name" className="label font-light absolute mb-0 -mt-2 pt-4 pl-3 
                leading-tighter text-gray-400 mt-2 cursor-text">Title</label>
                </div>

                <div className="mb-4 relative">
                    <textarea
                        value={detail}
                        onChange={textAreaDetailChange}
                        name="message" id="message" cols="18" rows="12"
                        className="input border border-gray-400 appearance-none rounded
                w-full px-3 py-3 pt-5 pb-2 focus focus:outline-none focus:border-indigo-600 
                focus:border-2 active:border-indigo-600 text-lg"></textarea>
                    <label for="message" className="label font-light absolute mb-0 -mt-2 pt-4 pl-3 
                leading-tighter text-gray-400 mt-2 cursor-text">Detail</label>
                </div>

                <Button
                    onClick={() => createItem()}
                    text={"Create Item"}
                    type={"default"}
                />
            </article>
        </Layout>
    );
}

