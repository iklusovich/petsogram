import React, {useState} from 'react';
import styles from "./form.module.css"
import {FormHeader} from "./FormHeader";
import {TitleSize, TitleValues} from "../Title/ITitleProps";
import {FormBody} from "./FormBody";
import {IFormValues} from "./IFormProps";
import {RegistrationFields} from "./RegistrationFields";
import {FormFooter} from "./FormFooter";
import {Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {ButtonViews} from "../Button/IButtonProps";
import {actions} from "../../redux/actions/actions";
import {IFieldName} from "../TextField/ITextFieldProps";
import {ICustomSelectValues} from "../CustomSelect/ICustomSelectProps";
import {RootState} from "../../redux/store/store";
import {CountryCode} from "libphonenumber-js";
import {getValidationSchema} from "./validationSchema";

//TODO Remove cast for countryCode(LOW)

//TODO to all inputs, same style errors, now username is not ordinary,
// may be change, all inputs to username style, our new style add (LOW)

const initialFormValues: IFormValues = {
    username: "",
    password: "",
    repeatPassword: "",
    sex: ICustomSelectValues.WOMAN,
    phone: "",
    countryCode: "RU" as CountryCode,
};

//TODO do validation for password, with big letter, include number and spacial symbol
// . WITHOUT add new library, do it with regular expression (HIGH)

export const Form = () => {
    const [isShowRegistrationForm, setIsShowRegistrationForm] = useState<ButtonViews>(ButtonViews.SIGN_UP);
    const dispatch = useDispatch();
    //TODO replace to selector with custom hook(LOW)
    const {registry: {loading}} = useSelector((state: RootState) => state);
    const {fetchLoginAction, fetchRegistryAction} = actions;

    const changeFormType = () => {
        setIsShowRegistrationForm(prevType =>
            prevType === ButtonViews.SIGN_IN ? ButtonViews.SIGN_UP : ButtonViews.SIGN_IN
        );
    };

    const onDispatchAction = (values: IFormValues) => {
        if (isShowRegistrationForm === ButtonViews.SIGN_UP) {
            return fetchRegistryAction(values);
        }
        return fetchLoginAction({
            password: values.password,
            username: values.username,
        });
    };

    return (
        <Formik<IFormValues>
            enableReinitialize={true}
            initialValues={initialFormValues}
            validationSchema={getValidationSchema}
            validateOnBlur={true}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                dispatch(onDispatchAction(values));
                setSubmitting(false);
                resetForm();
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleSubmit,
                  isSubmitting = false,
                  resetForm,
                  setFieldValue,
              }) => {
                return (
                    <form className={styles.formContainer} onSubmit={handleSubmit}>
                        <FormHeader
                            size={TitleSize.h1}
                            loading={loading}
                            title={isShowRegistrationForm === ButtonViews.SIGN_IN ? TitleValues.SIGN_IN : TitleValues.REGISTRATION}
                        />
                        {!loading && <>
                            <FormBody
                                values={values}
                                errors={errors}
                                touched={touched}
                                isRegistrationForm={isShowRegistrationForm === ButtonViews.SIGN_UP}
                            />
                            {isShowRegistrationForm === ButtonViews.SIGN_UP &&
                                <RegistrationFields
                                    values={values}
                                    optionValue={values.sex}
                                    setOptionValue={(newSex) => setFieldValue(IFieldName.SEX, newSex)}
                                    touched={touched}
                                    errors={errors}
                                />}
                            <FormFooter
                                changeFormType={() => {
                                    changeFormType();
                                    resetForm();
                                }}
                                handleSubmit={handleSubmit}
                                isSubmitting={isSubmitting}
                                formType={isShowRegistrationForm}
                            />
                        </>
                        }
                    </form>
                )
            }}
        </Formik>
    );
};
