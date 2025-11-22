import {FormikErrors, FormikTouched, FormikValues} from "formik";
import {IFormValues} from "../../Form/IFormProps";

export interface ICustomPhoneInputProps {
    touched: FormikTouched<IFormValues>;
    errors: FormikErrors<IFormValues>;
    values: FormikValues;
    setPhoneValue: (value:string) => void;
    setCountryValue: (value:string) => void;
}