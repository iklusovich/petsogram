import PhoneInput, {CountryData, PhoneInputProps} from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import style from "./phoneInput.module.css"
import React, {FC} from 'react';
import {IFieldName} from "../ITextFieldProps";
import {ICustomPhoneInputProps} from "./ICustomPhoneInputProps";
import {ErrorField} from "../../Form/ErrorField";
import cn from "classnames";
import {useField} from "formik";

export const CustomPhoneInput: FC<PhoneInputProps & ICustomPhoneInputProps> = ({
                                                                                   inputProps,
                                                                                   errors,
                                                                                   touched,
                                                                                   setCountryValue,
                                                                                   setPhoneValue,
                                                                                   country = "ru",
                                                                               }) => {

    const [field] = useField(IFieldName.PHONE);
    const [countryField] = useField(IFieldName.COUNTRY_CODE);

    const handleChange = (value: string, countryData: CountryData | {}) => {
        const countryCode = countryData && 'countryCode' in countryData
            ? (countryData.countryCode as string).toUpperCase()
            : 'RU';

        const normalizedPhone = value.startsWith('+') ? value : `+${value}`;

        field.onChange({
            target: {
                name: field.name,
                value: normalizedPhone,
            }
        });

        countryField.onChange({
            target: {
                name: IFieldName.COUNTRY_CODE,
                value: countryCode,
            }
        });
        setCountryValue(countryCode);
        setPhoneValue(normalizedPhone);
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
