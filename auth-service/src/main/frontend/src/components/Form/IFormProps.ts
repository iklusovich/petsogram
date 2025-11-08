export interface IFormProps {
    type: FormType;
    setFormType: (type: FormType) => void;
}

export enum FormType {
    LOGIN = 'LOGIN',
    REGISTRATION = 'REGISTRATION',
}