export enum ButtonViews {
    SUCCESS = 'success',
    ERROR = 'error',
    SIGN_UP = 'signup',
    SIGN_IN = 'signin',
    PRIMARY = 'primary',
}

export interface IButtonProps {
    onClick: () => void;
    type: "button" | "submit" | "reset";
    value: string;
    view?: ButtonViews;
    isDisabled?: boolean;
    changeFormType: () => void;
    image?: string;
}