import React, {FC} from 'react';
import {TextField} from "../../TextField";
import {IFieldName, ITypeProps} from "../../TextField/ITextFieldProps";
import styles from "./formBody.module.css"
import {ItemsData} from "./ItemsData";
import {IFormBodyProps} from "./IForrmBodyProps";
import {CustomPhoneInput} from "../../TextField/CustomPhoneInput";

export const FormBody: FC<IFormBodyProps> = ({isRegistrationForm, values, touched, errors, setPhoneValue, setCountryValue}) => {
    return (
        <div className={styles.formBody}>
            <TextField
                fieldName={IFieldName.USERNAME}
                type={ITypeProps.TEXT}
                placeholder={ItemsData.NAME_PLACEHOLDER}
                value={values.username}
                touched={touched}
                errors={errors}
            />
            {isRegistrationForm &&
                <CustomPhoneInput
                    touched={touched}
                    errors={errors}
                    values={values}
                    setPhoneValue={setPhoneValue}
                    setCountryValue={setCountryValue}
                    inputProps={{id: IFieldName.PHONE, name: IFieldName.PHONE}}
                />
            }
            <TextField
                type={ITypeProps.PASSWORD}
                fieldName={IFieldName.PASSWORD}
                placeholder={ItemsData.PASSWORD_PLACEHOLDER}
                value={values.password}
                touched={touched}
                errors={errors}
            />
        </div>
    );
};
