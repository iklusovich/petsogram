import React, {useState} from 'react';
import styles from "./form.module.css"
import {FormHeader} from "./FormHeader";

import {TitleSize, TitleValues} from "../Title/ITitleProps";
import {FormBody} from "./FormBody";
import {IFormValues} from "./IFormProps";
import {RegistrationFields} from "./RegistrationFields";
import {FormFooter} from "./FormFooter";
import {Formik} from "formik";
import {useDispatch} from "react-redux";
import {ButtonViews} from "../Button/IButtonProps";
import {fetchLoginAction, fetchRegistryAction} from "../../redux/actions/actions";

export const Form = () => {
    const [isShowRegistrationForm, setIsShowRegistrationForm] = useState<ButtonViews>(ButtonViews.SIGN_UP);
    const dispatch = useDispatch();
    const [optionValue, setOptionValue] = useState<string>("Woman");

    const changeFromType = (formType: ButtonViews) => {
        setIsShowRegistrationForm(formType);
    }

    const onDispatchAction  = (values: IFormValues & Pick<IFormValues, "username" | "password">) =>
        isShowRegistrationForm === ButtonViews.SIGN_UP ? fetchRegistryAction(values) :
             fetchLoginAction({
                 password: values.password,
                 username: values.username,
             })


    return (
        <Formik<IFormValues>
            initialValues={{password: '', sex: "Woman", phone: "", username: "", repeatPassword: ""}}
            validate={values => {

            }}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    dispatch(onDispatchAction(values));

                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleSubmit,
                  isSubmitting = false,
                  handleChange,
              }) => (
                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    <FormHeader size={TitleSize.h1}
                                title={isShowRegistrationForm === ButtonViews.SIGN_IN ? TitleValues.SIGN_IN : TitleValues.REGISTRATION}/>
                    <FormBody
                        errors={errors}
                        touched={touched}
                        isRegistrationForm={isShowRegistrationForm === ButtonViews.SIGN_UP}
                    />
                    {isShowRegistrationForm === ButtonViews.SIGN_UP &&
                        <RegistrationFields
                            onFormChange={handleChange}
                            values={values}
                            optionValue={optionValue}
                            setOptionValue={setOptionValue}
                        />}
                    <FormFooter
                        changeFormType={changeFromType}
                        handleSubmit={handleSubmit}
                        isSubmitting={isSubmitting}
                        formType={isShowRegistrationForm}
                    />
                </form>
            )}
        </Formik>

    );
};
