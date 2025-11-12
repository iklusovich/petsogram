
export enum ITypeProps {
    PASSWORD = "password",
    TEXT = "text",
    TEXTAREA = "textarea",
    EMAIL = "email",
    PHONE = "phone",
    NUMBER = "number",
    SELECT = "select",
}

export enum IFieldName {
    USERNAME = "username",
    PASSWORD = "password",
    REPEAT_PASSWORD = "repeatPassword",
    EMAIL = "email",
    SEX="sex",
    PHONE="phone"
}

export interface ITextFieldProps {
    type: ITypeProps;
    placeholder?: string;
    fieldName: IFieldName;
    disabled?: boolean;
    image?: string;
    optionValue?: string;
    toggleDropdownHandler?: (isShow: boolean) => void;
    setIsRevertImage?: (isShow: boolean) => void;
    isRevertImage?: boolean;
}

