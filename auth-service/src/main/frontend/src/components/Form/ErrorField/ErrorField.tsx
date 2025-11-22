import React, {FC} from 'react';
import {IFieldErrorProps} from "./IErrorFieldProps";
import style from "./errorField.module.css"

export const ErrorField: FC<IFieldErrorProps> = ({nameField, errors, touched}) => {
    return (
        <div className={style.errorFieldContainer}>
            {touched[nameField] && errors[nameField] && <div>{errors[nameField]}</div>}
        </div>
    );
};

