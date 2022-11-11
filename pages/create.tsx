import React, { useState, useEffect } from "react";
import Layout from '../components/layout'
import Button from '../components/button'
import { useRouter } from 'next/router';
import UploadImage from '../components/uploadImage'
import { useDispatch } from 'react-redux';
import { addItemList } from '../store/itemList/action'
import Input from "../components/input";
import Textarea from "../components/textarea";

export default function CreateItem() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')

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
    }, []);

    return (
        <Layout>
            <article className="max-w-screen-md mx-auto px-6 md:px-8 lg:px-10">
                <div className="text-4xl text-center mb-4">Create item</div>
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
                    onClick={() => createItem()}
                    text={"Create Item"}
                    type={"default"}
                />
            </article>
        </Layout>
    );
}

