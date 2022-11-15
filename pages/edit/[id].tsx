import React, { useState, useEffect, useRef } from "react";
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
import toast from 'react-hot-toast';
import { Formik, Form } from 'formik';
import { ItemSchema } from "../../schema/ItemSchema";

export default function EditItem() {

    const router = useRouter();
    const dispatch = useDispatch();
    const loadingItemList = useSelector((state: any) => state.itemList);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [title, setTitle] = useState<string>('')
    const [detail, setDetail] = useState<string>('')
    const [photo, setPhoto] = useState<string>('')

    console.log("photo",photo)

    useEffect(() => {
        const { id } = router.query;
        const newItemList = loadingItemList.filter((item: ItemType) => item.id == id)
        setTitle(newItemList[0]?.title)
        setDetail(newItemList[0]?.detail)
        setPhoto(newItemList[0]?.photo);
        setIsLoading(false);
    }, [router.query, loadingItemList])

    const inputPhotoChange = (e: any) => {
        setPhoto(URL.createObjectURL(e.target.files[0]))
    }

    const updateItem = (value: any) => {
        dispatch(
            updateItemList({
                id: router.query.id,
                title: value.title,
                detail: value.detail,
                photo: value.photo ? value.photo : "/washing.jpg",
                time: new Date().toLocaleString()
            }))
        router.push({ pathname: '/', })
        toast.success('Item updated successfully');
    }

    const removeItem = () => {
        dispatch(
            removeItemList(router.query.id as string))
        router.push({ pathname: '/' })
        toast.success('Item deleted successfully');
    }

    return (
        isLoading ? <Layout><p>Loading...</p></Layout>
            :
            <Layout>
                <article className="max-w-screen-md mx-auto px-6 md:px-8 lg:px-10">
                    <div className="text-4xl text-center mb-4">Edit item</div>
                    <BackButton router={router} />
                    <Formik
                        initialValues={{
                            title: title,
                            detail: detail,
                            photo: photo,
                        }}
                        validationSchema={ItemSchema}
                        onSubmit={(value) => {
                            updateItem(value)
                        }}
                    >
                          {({values,errors,touched,handleChange,handleBlur,setFieldValue}) => (
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
                                    text={"Update item"}
                                    type={"default"} />
                            </Form>
                        )}
                    </Formik>
                    <Button
                        onClick={() => removeItem()}
                        text={"Remove item"}
                        type={"text"} />
                </article>
            </Layout>
    );
}
