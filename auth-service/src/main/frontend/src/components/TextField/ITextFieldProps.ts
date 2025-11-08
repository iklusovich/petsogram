import React from "react";
import {ICustomSelectProps} from "../CustomSelect/ICustomSelectProps";

export enum ITypeProps {
    PASSWORD = "password",
    TEXT = "text",
    TEXTAREA = "textarea",
    EMAIL = "email",
    PHONE = "phone",
    NUMBER = "number",
    SELECT = "select",
}

export interface ITextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
    type: ITypeProps;
    placeholder?: string;
    disabled?: boolean;
    handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    image?: string;
    value?: string;
    closeSelect?: () => boolean;
}

export type ITextFieldSelect = ITextFieldProps & ICustomSelectProps;
