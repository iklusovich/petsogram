import {IFormValues} from "../IFormProps";

export interface IRegistrationFieldsProps {
    values: IFormValues;
    onFormChange: (values: string) => void;
    optionValue:string;
    setOptionValue:(value:string) => void;
}