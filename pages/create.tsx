import React, { useState } from "react";
import Layout from '../components/Layout/Layout'
import Button from '../components/Button/Button'
import { useRouter } from 'next/router';
import UploadImage from '../components/UploadImage/UploadImage'
import { useDispatch } from 'react-redux';
import { addItemList } from '../store/itemList/action'
import Input from "../components/Input/Input";
import Textarea from "../components/Textarea/Textarea";
import BackButton from "../components/BackButton/BackButton";

export default function CreateItem() {
    const router = useRouter();
    const dispatch = useDispatch();

    const [title, setTitle] = useState<string>('')
    const [detail, setDetail] = useState<string>('')

    const inputTextChange = (e: any) => {
        setTitle(e.target.value)
    }
    const textAreaDetailChange = (e: any) => {
        setDetail(e.target.value)
    }

    const generateId = () => {
        return Date.now().toString() + "_" + (Math.random() * 1e6).toFixed(0).toString();
    };

    const createItem = () => {
        dispatch(
            addItemList({
                id: generateId(),
                title,
                detail,
                photo: "/washing.jpg",
                time: new Date().toLocaleString()
            })
        )
        router.push({ pathname: '/' })
    }

    return (
        <Layout>
            <article className="max-w-screen-md mx-auto px-6 md:px-8 lg:px-10">
                <div className="text-4xl text-center mb-4">Create item</div>
                <BackButton router={router} />
                    <UploadImage
                    photo={''}/>
                    <Input
                        value={title}
                        onChange={inputTextChange}
                    />
                    <Textarea
                        value={detail}
                        onChange={textAreaDetailChange}
                    />
                    <Button
                        onClick={() => createItem()}
                        text={"Create Item"}
                        type={"default"}
                    />
            </article>
        </Layout>
    );
}

