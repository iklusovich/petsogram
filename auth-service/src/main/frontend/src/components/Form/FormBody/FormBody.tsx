import React, {FC} from 'react';
import {TextField} from "../../TextField";
import {ITypeProps} from "../../TextField/ITextFieldProps";
import styles from "./formBody.module.css"
import {ItemsData} from "./ItemsData";
import {IFormBodyProps} from "./IForrmBodyProps";

export const FormBody:FC<IFormBodyProps> = () => {

    return (
        <div className={styles.formBody}>
            <TextField type={ITypeProps.PHONE} placeholder={ItemsData.PHONE_PLACEHOLDER}/>
            <TextField type={ITypeProps.PASSWORD} placeholder={ItemsData.PASSWORD_PLACEHOLDER}/>
        </div>
    );
};
