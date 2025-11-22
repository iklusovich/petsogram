import React, {FC} from 'react';
import {TextField} from "../../TextField"
import {IFieldName, IFieldsPlaceholders, ITypeProps} from "../../TextField/ITextFieldProps";
import {CustomSelect} from "../../CustomSelect";
import styles from "./RegistrationFields.module.css";
import {arrowImage} from "../../Image/ImagesList";
import {IRegistrationFieldsProps} from "./IRegistrationFieldsProps";
import {ICustomSelectValues} from "../../CustomSelect/ICustomSelectProps";

export const RegistrationFields: FC<IRegistrationFieldsProps> = ({
                                                                     setOptionValue,
                                                                     optionValue,
                                                                     values,
                                                                     touched,
                                                                     errors
                                                                 }) => {

    return (
        <div className={styles.registrationFields}>
            <TextField
                type={ITypeProps.PASSWORD}
                placeholder={IFieldsPlaceholders.REPEAT_PASSWORD}
                fieldName={IFieldName.REPEAT_PASSWORD}
                value={values.repeatPassword}
                touched={touched}
                errors={errors}
            />
            <CustomSelect
                options={Object.values(ICustomSelectValues)}
                image={arrowImage.arrow}
                setOptionValue={setOptionValue}
                optionValue={optionValue}
                errors={errors}
                touched={touched}/>
        </div>
    );
};

