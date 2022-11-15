import * as Yup from "yup";

export const ItemSchema = Yup.object().shape({
    title: Yup.string()
        .max(100, 'It must not be greater than 100 characters.')
        .required('This field is required'),
    detail: Yup.string()
        .max(1000, 'It must not be greater than 1000 characters.')
        .required('This field is required'),
});

export const initialValues = {
    title: '',
    detail: '',
}