import {FormEvent} from "react";
import {ButtonViews} from "../../Button/IButtonProps";

export interface IFormFooterProps {
    changeFormType: () => void;
    handleSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void;
    isSubmitting: boolean;
    formType: ButtonViews;
}