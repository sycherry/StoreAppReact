import { FormikErrors } from "formik";

export interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  errors: any;
  touched: any;
};
