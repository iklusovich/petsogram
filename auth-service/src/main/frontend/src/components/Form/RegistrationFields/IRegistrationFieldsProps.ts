import {IFormValues} from "../IFormProps";
import {FormikErrors, FormikTouched} from "formik";

export interface IRegistrationFieldsProps {
    optionValue:string;
    setOptionValue:(value:string) => void;
    values: IFormValues;
    touched: FormikTouched<IFormValues>;
    errors: FormikErrors<IFormValues>;
}