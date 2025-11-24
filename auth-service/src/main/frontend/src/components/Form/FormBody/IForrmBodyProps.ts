import {IFormValues} from "../IFormProps";
import {FormikErrors, FormikTouched} from "formik";

export interface IFormBodyProps {
    errors: FormikErrors<IFormValues>,
    touched: FormikTouched<IFormValues>,
    isRegistrationForm: boolean,
    values: Pick<IFormValues, "username" | "password">,
   }