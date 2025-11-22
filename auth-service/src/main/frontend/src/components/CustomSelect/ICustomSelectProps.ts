import {IFormValues} from "../Form/IFormProps";
import {FormikErrors, FormikTouched} from "formik";

export interface ICustomSelectProps {
    options: string[];
    image: string;
    setOptionValue: (value: string) => void;
    optionValue: string;
    errors: FormikErrors<IFormValues>;
    touched: FormikTouched<IFormValues>;
}

export enum ICustomSelectValues {
    MAN='Man',
    WOMAN='Woman',
}