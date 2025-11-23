import {FormikErrors, FormikTouched} from "formik";
import {IFormValues} from "../../Form/IFormProps";

export interface ICustomPhoneInputProps {
    touched: FormikTouched<IFormValues>;
    errors: FormikErrors<IFormValues>;
}