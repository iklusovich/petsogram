import {IFormValues} from "../IFormProps";
import {FormikErrors, FormikTouched} from "formik";

export interface IFieldErrorProps {
    nameField: keyof IFormValues;
    touched: FormikTouched<IFormValues>;
    errors: FormikErrors<IFormValues>
}

export enum IErrorFieldTexts {
    REQUIRED = "The field should be required",
    LITTLE_SIZE = "The size of the field should be large than 2 symbols",
    MAX_LENGTH = "The field should be less than 20 symbols",
    EQUALS_PASSWORD = "The passwords should be equal",
    INCORRECT_PHONE="Incorrect phone number",
    FIELD_IS_EXISTS= "The value is already exists"
}