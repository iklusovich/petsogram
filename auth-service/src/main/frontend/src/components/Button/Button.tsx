import React, {FC} from 'react';
import {ButtonViews, IButtonProps} from "./IButtonProps";
import style from "./button.module.css"
import cn from "classnames";

export const Button:FC<IButtonProps> = (props) => {

    const {type, value, view, onClick} = props;

    return (
            <button onClick={onClick} className={cn({
                btn: true,
                buttonSignIn: view === ButtonViews.SIGN_IN,
                buttonSignUp: view === ButtonViews.SIGN_UP,

            }).split(" ").map(s => style[s]).join(" ")} type={type}>{value}</button>
    );
};

