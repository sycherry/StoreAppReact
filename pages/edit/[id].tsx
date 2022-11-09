import React, { FC, useState, useEffect } from "react";
import { initialData } from '../../initialData';
import Layout from '../../components/layout'
import Button from '../../components/button'
import UploadImage from '../../components/uploadImage'
import { useRouter } from 'next/router';

export default function EditItem(props) {
    const { post } = props;
    const router = useRouter();
    const [files, setFiles] = useState([])
    const [title, setTitle] = useState(post.title)
    const [detail, setDetail] = useState(post.detail)

    const inputTextChange = e => {
        setTitle(e.target.value)
    }
    const textAreaDetailChange = e => {
        setDetail(e.target.value)
    }
    const updateItem = () => {
        router.push(
            {
              pathname: '/',
              query: { title: title, detail: detail },
            }, '/', )
    }


    const removeItem = (id:any) => {
        router.push(
            {
              pathname: '/',
              query: { id: id },
            }, '/', )
    }
    return (
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
                active:border-pink-600 text-lg" autofocus />

                    <label for="name" className="label font-light absolute mb-0 -mt-2 pt-4 pl-3 
                leading-tighter text-gray-400 mt-2 cursor-text">Title</label>
                </div>

                <div className="mb-4 relative">
                    <textarea
                        value={detail}
                        onChange={textAreaDetailChange}
                        name="message" id="message" cols="18" rows="12"
                        className="input border border-gray-400 appearance-none rounded
                w-full px-3 py-3 pt-5 pb-2 focus focus:outline-none focus:border-pink-600 
                focus:border-2 active:border-pink-600 text-lg"></textarea>
                    <label for="message" className="label font-light absolute mb-0 -mt-2 pt-4 pl-3 
                leading-tighter text-gray-400 mt-2 cursor-text">Detail</label>
                </div>

                <Button
                    onClick={() => updateItem()}
                    text={"Update item"}
                    type={"default"} />
                <Button
                    onClick={() => removeItem(post.id)}
                    text={"Remove item"}
                    type={"text"} />
            </article>
        </Layout>
    );
}

export const getStaticProps = async ({ params }) => {
    const initialDataList = initialData.filter((p) => p.id.toString() === params.id);
    return {
        props: {
            post: initialDataList[0],
        },
    };
};

export async function getStaticPaths() {
    const paths = initialData.map((data) => ({
        params: { id: data.id.toString() },
    }))
    return {
        paths,
        fallback: false
    };
}



