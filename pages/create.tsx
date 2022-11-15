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
import toast from 'react-hot-toast';
import { Formik, Form } from 'formik';
import { initialValues, ItemSchema } from "../schema/ItemSchema";

export default function CreateItem() {
    const router = useRouter();
    const dispatch = useDispatch();

    const [photo, setPhoto] = useState<string>('')
    const inputPhotoChange = (e: any) => {
        setPhoto(URL.createObjectURL(e.target.files[0]))
    }

    const generateId = () => {
        return Date.now().toString() + "_" + (Math.random() * 1e6).toFixed(0).toString();
    };

    const createItem = (value: any) => {
        dispatch(
            addItemList({
                id: generateId(),
                title: value.title,
                detail: value.detail,
                photo: photo ? photo : "/washing.jpg",
                time: new Date().toLocaleString()
            })
        )
        router.push({ pathname: '/' })
        toast.success('Item added successfully');
    }

    return (
        <Layout>
            <article className="max-w-screen-md mx-auto px-6 md:px-8 lg:px-10">
                <div className="text-4xl text-center mb-4">Create item</div>
                <BackButton router={router} />
                <UploadImage
                    setPhoto={setPhoto}
                    photo={photo}
                    onChange={inputPhotoChange}
                />
                <Formik
                    initialValues={initialValues}
                    validationSchema={ItemSchema}
                    onSubmit={(value) => {
                        createItem(value)
                    }}
                >
                    {(formik) => (
                        <Form>
                            <Input
                                errors={formik.errors.title}
                                touched={formik.touched.title}
                                value={formik.values.title}
                                onChange={formik.handleChange("title")}
                                onBlur={formik.handleBlur("title")} />
                            <Textarea
                                errors={formik.errors.detail}
                                touched={formik.touched.detail}
                                value={formik.values.detail}
                                onChange={formik.handleChange("detail")}
                                onBlur={formik.handleBlur("detail")} />
                            <Button
                                onClick={null}
                                text={"Create Item"}
                                type={"default"} />
                        </Form>
                    )}
                </Formik>
            </article>
        </Layout>
    );
}

