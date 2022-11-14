import React, { FC, useState, useEffect } from "react";
import Layout from '../../components/Layout/Layout'
import Button from '../../components/Button/Button'
import UploadImage from '../../components/UploadImage/UploadImage'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { updateItemList, removeItemList } from '../../store/itemList/action'
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import BackButton from "../../components/BackButton/BackButton";
import { ItemType } from "../../type/ItemType";

export default function EditItem() {

    const router = useRouter();
    const dispatch = useDispatch();
    const loadingItemList = useSelector((state: any) => state.itemList);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const { id } = router.query;
        const newTodoList = loadingItemList.filter((item: ItemType) => item.id == id)
        setTitle(newTodoList[0]?.title);
        setDetail(newTodoList[0]?.detail);
        setPhoto(newTodoList[0]?.photo);
        setIsLoading(false);

    }, [router.isReady, router.query, loadingItemList])

    const [photo, setPhoto] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [detail, setDetail] = useState<string>('')

    const inputPhotoChange = (e: any) => {
        setPhoto(URL.createObjectURL(e.target.files[0]))
    }

    const inputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const textAreaDetailChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDetail(e.target.value)
    }


    const updateItem = () => {

        dispatch(
            updateItemList({
                id: router.query.id,
                title,
                detail,
                photo: photo ? photo : "/washing.jpg",
                time: new Date().toLocaleString()
            }))
        router.push({ pathname: '/', })
    }

    const removeItem = () => {
        console.log("router.query.id",router.query.id)
        dispatch(
            removeItemList(router.query.id as string))
        router.push({ pathname: '/' })
    }

    return (
        isLoading ? <Layout><p>Loading...</p></Layout>
            :
            <Layout>
                <article className="max-w-screen-md mx-auto px-6 md:px-8 lg:px-10">
                    <div className="text-4xl text-center mb-4">Edit item</div>
                    <BackButton router={router} />
                    <UploadImage
                    photo={photo}
                    onChange={inputPhotoChange}
                    />
                    <Input
                        value={title}
                        onChange={inputTextChange}
                    />
                    <Textarea
                        value={detail}
                        onChange={textAreaDetailChange}
                    />
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
