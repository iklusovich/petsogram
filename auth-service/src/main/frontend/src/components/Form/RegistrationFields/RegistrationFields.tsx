import React, {FC} from 'react';
import {TextField} from "../../TextField"
import {IFieldName, ITypeProps} from "../../TextField/ITextFieldProps";
import {CustomSelect} from "../../CustomSelect";
import styles from "./RegistrationFields.module.css";
import {arrowImage} from "../../Image/ImagesList";
import {IRegistrationFieldsProps} from "./IRegistrationFieldsProps";

export const RegistrationFields: FC<IRegistrationFieldsProps> = ({setOptionValue, optionValue}) => {
        return (
        <div className={styles.registrationFields}>
            <TextField
                type={ITypeProps.PASSWORD}
                placeholder={'Repeat password'}
                fieldName={IFieldName.REPEAT_PASSWORD}
            />
            <CustomSelect
                options={["Woman", "Man"]}
                image={arrowImage.arrow}
                setOptionValue={setOptionValue}
                optionValue={optionValue}
            />
        </div>
    );
};

