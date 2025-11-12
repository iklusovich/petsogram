import React, {FC} from 'react';
import {TextField} from "../../TextField";
import {IFieldName, ITypeProps} from "../../TextField/ITextFieldProps";
import styles from "./formBody.module.css"
import {ItemsData} from "./ItemsData";
import {IFormBodyProps} from "./IForrmBodyProps";

export const FormBody: FC<IFormBodyProps> = ({isRegistrationForm}) => {
    return (
        <div className={styles.formBody}>

                <TextField
                    fieldName={IFieldName.USERNAME}
                    type={ITypeProps.TEXT}
                    placeholder={ItemsData.NAME_PLACEHOLDER}
                />

            {isRegistrationForm &&
            <TextField
                fieldName={IFieldName.PHONE}
                type={ITypeProps.PHONE}
                placeholder={ItemsData.PHONE_PLACEHOLDER}
            />
            }
            <TextField
                type={ITypeProps.PASSWORD}
                fieldName={IFieldName.PASSWORD}
                placeholder={ItemsData.PASSWORD_PLACEHOLDER}
            />
        </div>
    );
};
