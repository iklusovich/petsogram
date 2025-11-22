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
import {fetchLoginAction, fetchRegistryAction} from "../../redux/actions/actions";
import {IFieldName} from "../TextField/ITextFieldProps";
import * as Yup from 'yup';
import {ICustomSelectValues} from "../CustomSelect/ICustomSelectProps";
import {IErrorFieldTexts} from "./ErrorField/IErrorFieldProps";
import {RootState} from "../../redux/store/store";
import {CountryCode, isValidPhoneNumber} from "libphonenumber-js";

const initialFormValues: IFormValues = {
    username: "",
    password: "",
    repeatPassword: "",
    sex: ICustomSelectValues.WOMAN,
    phone: "",
    countryCode: "RU" as CountryCode,
};

//TODO do validation for password, with big letter, include number and spacial symbol (HIGH). WITHOUT add new library, do it with regular expression

const validationSchema = Yup.object<IFormValues>().shape({
    username: Yup.string()
        .min(2, IErrorFieldTexts.LITTLE_SIZE)
        .max(20, IErrorFieldTexts.MAX_LENGTH)
        .required(IErrorFieldTexts.REQUIRED),
    password: Yup.string()
        .min(2, IErrorFieldTexts.LITTLE_SIZE)
        .max(20, IErrorFieldTexts.MAX_LENGTH)
        .required(IErrorFieldTexts.REQUIRED),
    repeatPassword: Yup.string()
        .min(2, IErrorFieldTexts.LITTLE_SIZE)
        .max(20, IErrorFieldTexts.MAX_LENGTH)
        .oneOf([Yup.ref(IFieldName.PASSWORD)], IErrorFieldTexts.EQUALS_PASSWORD)
        .required(IErrorFieldTexts.REQUIRED),
    phone: Yup.string()
        .required('Введите номер')
        .test('exists-user', "user exists", function (value){
            console.log(value)
        })
        .test('strict-international', 'Введите номер строго в международном формате', function(value) {
            if (!value) return false;
            const { countryCode } = this.parent;
            const normalizedPhone = value.startsWith('+') ? value : `+${value}`;
            return /^\+[1-9]\d{9,14}$/.test(normalizedPhone)
                && isValidPhoneNumber(normalizedPhone, countryCode);
        }),
    sex: Yup.string().oneOf(Object.values(ICustomSelectValues)).required(),
    countryCode: Yup.string().required()
});

export const Form = () => {
    const [isShowRegistrationForm, setIsShowRegistrationForm] = useState<ButtonViews>(ButtonViews.SIGN_UP);
    const dispatch = useDispatch();
    const {registry: {loading}} = useSelector((state: RootState) => state);

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

    const formValues = {
        ...initialFormValues,
    };

    return (
        <Formik<IFormValues>
            enableReinitialize={true}
            initialValues={formValues}
            validationSchema={validationSchema}
            validateOnBlur={true}    // Валидировать при потере фокуса
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
                  setFieldValue
              }) => {
                return (
                    <form className={styles.formContainer} onSubmit={handleSubmit}>
                        <FormHeader
                            size={TitleSize.h1}
                            loading={loading}
                            title={isShowRegistrationForm === ButtonViews.SIGN_IN ? TitleValues.SIGN_IN : TitleValues.REGISTRATION}
                        />
                        { !loading && <>
                            <FormBody
                                values={values}
                                errors={errors}
                                touched={touched}
                                setPhoneValue={(phone) => setFieldValue(IFieldName.PHONE, phone)}
                                setCountryValue={(country) => setFieldValue(IFieldName.COUNTRY_CODE, country)}
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
