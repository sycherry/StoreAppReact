import React from "react";
import Layout from '../components/Layout/Layout';
import Button from '../components/Button/Button';
import { useRouter } from 'next/router';
import UploadImage from '../components/UploadImage/UploadImage';
import { useDispatch } from 'react-redux';
import { addItemList } from '../store/itemList/action';
import Input from "../components/Input/Input";
import Textarea from "../components/Textarea/Textarea";
import BackButton from "../components/BackButton/BackButton";
import toast from 'react-hot-toast';
import { Formik, Form } from 'formik';
import { initialValues, ItemSchema } from "../schema/ItemSchema";

export default function CreateItem() {
    const router = useRouter();
    const dispatch = useDispatch();

    const generateId = () => {
        return Date.now().toString() + "_" + (Math.random() * 1e6).toFixed(0).toString();
    };

    const createItem = (value: any) => {
        dispatch(
            addItemList({
                id: generateId(),
                title: value.title,
                detail: value.detail,
                photo: value.photo ? value.photo : "/initialImage.jpg",
                time: new Date().toLocaleString()
            })
        );
        router.push({ pathname: '/' });
        toast.success('Item added successfully');
    };

    return (
        <Layout>
            <article className="max-w-screen-md mx-auto px-6 md:px-8 lg:px-10">
                <div className="text-4xl text-center mb-4">Create item</div>
                <BackButton router={router} />

                <Formik
                    initialValues={initialValues}
                    validationSchema={ItemSchema}
                    onSubmit={(value) => {
                        createItem(value);
                    }}>
                    {({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => (
                        <Form>
                            <UploadImage
                                photo={values.photo}
                                setFieldValue={setFieldValue}
                            />
                            <Input
                                errors={errors.title}
                                touched={touched.title}
                                value={values.title}
                                onChange={handleChange("title")}
                                onBlur={handleBlur("title")} />
                            <Textarea
                                errors={errors.detail}
                                touched={touched.detail}
                                value={values.detail}
                                onChange={handleChange("detail")}
                                onBlur={handleBlur("detail")} />
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
};

