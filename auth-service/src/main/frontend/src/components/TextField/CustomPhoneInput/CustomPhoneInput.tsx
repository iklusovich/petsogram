import PhoneInput, {CountryData, PhoneInputProps} from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import style from "./phoneInput.module.css"
import React, {FC} from 'react';
import {IFieldName} from "../ITextFieldProps";
import {ICustomPhoneInputProps} from "./ICustomPhoneInputProps";
import {ErrorField} from "../../Form/ErrorField";
import cn from "classnames";
import {useField} from "formik";
import {normalizePhone} from "../../../utils/function";


//TODO change select arrow, хз получиться или нет, сделать, как в селекте с полом,
// возможна эта либа не поддерживает такое или очень криво все будет (LOW)

export const CustomPhoneInput: FC<PhoneInputProps & ICustomPhoneInputProps> = ({
                                                                                   inputProps,
                                                                                   errors,
                                                                                   touched,
                                                                                   country = "ru",
                                                                               }) => {
    const [field] = useField(IFieldName.PHONE);
    const [countryField] = useField(IFieldName.COUNTRY_CODE);

    const handleChange = (value: string, countryData: CountryData | {}) => {

        const countryCode = countryData && 'countryCode' in countryData
            ? (countryData.countryCode as string).toUpperCase()
            : 'RU';

        field.onChange({
            target: {
                name: field.name,
                value: normalizePhone(value),
            }
        });

        countryField.onChange({
            target: {
                name: IFieldName.COUNTRY_CODE,
                value: countryCode,
            }
        });
    };

    return (
        <>
            <PhoneInput
                inputProps={{
                    ...inputProps,
                }}
                containerClass={cn({
                    [style.container]: true,
                    [style.containerError]: touched.phone && errors.phone
                })}
                inputClass={style.input}
                inputStyle={{
                    border: "none"
                }}
                buttonStyle={{
                    border: "none",
                    background: "none",
                    left: -5
                }}
                value={field.value}
                onChange={handleChange}
                country={countryField.value?.toLowerCase() || country}
            />

            <ErrorField nameField={IFieldName.PHONE} touched={touched} errors={errors}/>
        </>
    );
};
