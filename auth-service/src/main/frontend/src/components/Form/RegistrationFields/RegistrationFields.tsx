import React, {FC} from 'react';
import {TextField} from "../../TextField"
import {ITypeProps} from "../../TextField/ITextFieldProps";
import {CustomSelect} from "../../CustomSelect";
import styles from "./RegistrationFields.module.css";
import {arrowImage} from "../../Image/ImagesList";
import {IRegistrationFieldsProps} from "./IRegistrationFieldsProps";

export const RegistrationFields: FC<IRegistrationFieldsProps> = (props) => {

    return (
        <div className={styles.registrationFields}>
            <TextField type={ITypeProps.PASSWORD} placeholder={'Repeat password'}/>
            <CustomSelect
                options={["Woman", "Man"]}
                image={arrowImage.arrow}
            />
        </div>
    );
};

