import React, { FC, useState, useEffect } from "react";
import Layout from '../../components/layout'
import Button from '../../components/button'
import UploadImage from '../../components/uploadImage'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { updateItemList, removeItemList } from '../../store/itemList/action'
import Input from "../../components/input";
import Textarea from "../../components/textarea";

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

        dispatch(
            updateItemList({
                id: router.query.id,
                title,
                detail,
                photo: "/washing.jpg",
                time: new Date().toLocaleString(),
            }))
        router.push({ pathname: '/', })
    }

    const removeItem = () => {
        dispatch(
            removeItemList({
                id: router.query.id,
                title: '',
                detail: '',
                photo: "",
                time: "",
            }))
        router.push({ pathname: '/' })
    }


    useEffect(() => {
        var toggleInputContainer = function (input: any) {
            if (input.value != "") {
                input.classList.add('filled');
            } else {
                input.classList.remove('filled');
            }
        }
        var inputs = document.getElementsByClassName("input");
        for (var i = 0; i < inputs.length; i++) {
            console.log('looped');
            inputs[i].addEventListener('keyup', function () {
                toggleInputContainer(this);
            });
            toggleInputContainer(inputs[i]);
        }
    }, [title,detail]);

    return (
        isLoading ? <Layout>Loading...</Layout>
            :
            <Layout>
                <article className="max-w-screen-md mx-auto px-6 md:px-8 lg:px-10">
                    <div className="text-4xl text-center mb-4">Edit item</div>
                    <button type="button" onClick={() => router.back()}>←Back</button>
                    <UploadImage />
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
