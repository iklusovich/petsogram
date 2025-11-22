import {FormikErrors, FormikTouched} from "formik";
import {IFormValues} from "../Form/IFormProps";

export enum ITypeProps {
    PASSWORD = "password",
    TEXT = "text",
    TEXTAREA = "textarea",
    EMAIL = "email",
    PHONE = "phone",
    NUMBER = "number",
    SELECT = "select",
}

export enum IFieldsPlaceholders {
    REPEAT_PASSWORD='Repeat password, please'
}

export enum IFieldName {
    USERNAME = "username",
    PASSWORD = "password",
    REPEAT_PASSWORD = "repeatPassword",
    EMAIL = "email",
    SEX="sex",
    PHONE="phone",
    COUNTRY_CODE="countryCode"
}

export interface ITextFieldProps {
    type: ITypeProps;
    placeholder?: string;
    fieldName: keyof  IFormValues;
    disabled?: boolean;
    image?: string;
    value: string;
    optionValue?: string;
    toggleDropdownHandler?: (isShow: boolean) => void;
    setIsRevertImage?: (isShow: boolean) => void;
    isRevertImage?: boolean;
    errors: FormikErrors<IFormValues>
    touched: FormikTouched<IFormValues>
}

