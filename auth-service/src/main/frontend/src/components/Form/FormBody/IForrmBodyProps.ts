import {IFormValues} from "../IFormProps";
import {FormikErrors, FormikTouched} from "formik";

export interface IFormBodyProps {
    errors: FormikErrors<IFormValues>,
    touched: FormikTouched<IFormValues>,
    isRegistrationForm: boolean,
    values: Pick<IFormValues, "username" | "password">,
    setPhoneError: (field: string, message?: string) => void,
    setTouchedPhone: (isValidate: boolean) => void,
    setTouched?: (touched: FormikTouched<IFormValues>, shouldValidate?: boolean) => Promise<void | FormikErrors<IFormValues>>
}