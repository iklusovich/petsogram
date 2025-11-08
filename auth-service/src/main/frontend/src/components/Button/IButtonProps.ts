import React from "react";



export enum ButtonViews {
    SUCCESS='success',
    ERROR='error',
    SIGN_UP='signup',
    SIGN_IN='signin',
    PRIMARY='primary',
}

export interface IButtonProps {
    children?: React.ReactNode;
    className?: string;
    onClick: () => void;
    type: "button" | "submit" | "reset";
    value: string;
    view?: ButtonViews;
}