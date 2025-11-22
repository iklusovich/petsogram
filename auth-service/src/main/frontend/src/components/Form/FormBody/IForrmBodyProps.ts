import {IFormValues} from "../IFormProps";
import {FormikErrors, FormikTouched} from "formik";

export interface IFormBodyProps  {
    errors: FormikErrors<IFormValues>;
    touched: FormikTouched<IFormValues>;
    isRegistrationForm: boolean;
    values: IFormValues;
    setPhoneValue: (value:string) => void;
    setCountryValue: (value:string) => void;
}