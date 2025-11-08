import React, {FC, useState} from 'react';
import styles from "./form.module.css"
import {FormHeader} from "./FormHeader";

import {TitleSize, TitleValues} from "../Title/ITitleProps";
import {FormBody} from "./FormBody";
import {IFormProps} from "./IFormProps";
import {RegistrationFields} from "./RegistrationFields";
import {FormFooter} from "./FormFooter";
import {ItemsData} from "./FormBody/ItemsData";

export const Form: FC<IFormProps> = (props) => {

    const {type, setFormType} = props
    const [isShowRegistrationForm, setIsShowRegistrationForm] = useState<Pick<typeof ItemsData, "SIGN_IN" | "SIGN_UP">>(ItemsData);

    const showRegistrationFormHandler = (formType: Pick<typeof ItemsData, "SIGN_IN" | "SIGN_UP">) => {
        setIsShowRegistrationForm(formType);
    }

    return (
        <form className={styles.formContainer}>
            <FormHeader size={TitleSize.h1} title={TitleValues.SIGN_IN}/>
            <FormBody type={type} setFormType={setFormType}/>
            {isShowRegistrationForm && <RegistrationFields/>}
            <FormFooter changeFormType={showRegistrationFormHandler}/>
        </form>
    );
};
