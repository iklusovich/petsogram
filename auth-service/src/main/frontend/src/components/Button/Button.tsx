import React, {FC} from 'react';
import {ButtonViews, IButtonProps} from "./IButtonProps";
import style from "./button.module.css"
import cn from "classnames";

export const Button: FC<IButtonProps> = (props) => {

    const {type, value, view, onClick, isDisabled, changeFormType} = props;

    const buttonSighUpText = () => {
        if (changeFormType) {
            return <p>Do you have
                <button type="button" onClick={() => changeFormType(ButtonViews.SIGN_IN)}
                   className={style.link}>account</button>
                ?</p>
        }
    }

    const buttonSighInText = () => {
        if (changeFormType) {
            return <p>Don't have an
                <button type="button"  onClick={() => changeFormType(ButtonViews.SIGN_UP)}
                   className={style.link}>account</button>?</p>
        }
    }

    return (
        <div className={style.buttonContainer}>
            {view === ButtonViews.SIGN_UP && buttonSighUpText()}
            {view === ButtonViews.SIGN_IN && buttonSighInText()}
            <button onClick={onClick}
                    disabled={isDisabled}
                    className={cn({
                        [style.btn]: true,
                        [style.buttonSignIn]: view === ButtonViews.SIGN_IN,
                        [style.buttonSignUp]: view === ButtonViews.SIGN_UP,
                    })} type={type}>{value}</button>
        </div>
    );

};

