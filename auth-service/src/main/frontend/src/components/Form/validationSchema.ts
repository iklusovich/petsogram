import * as Yup from 'yup';
import {IFormValues} from './IFormProps';
import {IFieldName} from '../TextField/ITextFieldProps';
import {IErrorFieldTexts} from './ErrorField/IErrorFieldProps';
import {ICustomSelectValues} from '../CustomSelect/ICustomSelectProps';
import {isValidPhoneNumber} from 'libphonenumber-js';
import {isValidPhone, normalizePhone} from "../../utils/function";
import {api} from "../../api/api";

//TODO поправить баг с валидацией, сделать ее налету, убрать магические записи(HIGH)
//TODO при проверке телефона дергается ручка два раза(HIGH)
//TODO подключить лодашевский дебаунс, на все инпуты, наверно реализация TextField, CustomPhoneInput(HIGH)
//TODO Все таки поробавать запихнуть селектор(LOW)

const createValidationSchema = Yup.object<IFormValues>().shape({
    username: Yup.string()
        .min(2, IErrorFieldTexts.LITTLE_SIZE)
        .max(20, IErrorFieldTexts.MAX_LENGTH)
        .required(IErrorFieldTexts.REQUIRED)
        .test('username-exists', IErrorFieldTexts.FIELD_IS_EXISTS, async function (value) {
            if (!value) return true;
            try {
                const exists = await api.existsUser({ value, type: IFieldName.USERNAME });
                return !exists;
            } catch (error) {
                return true;
            }
        }),

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
        .required(IErrorFieldTexts.REQUIRED)
        .test('strict-international', IErrorFieldTexts.INCORRECT_PHONE, function (value) {
            if (!value) return false;
            const {countryCode} = this.parent;
            return isValidPhone(value)
                && isValidPhoneNumber(normalizePhone(value), countryCode);
        })
        .test('phone-exists', IErrorFieldTexts.FIELD_IS_EXISTS, async function (value) {
            if (!value) return true;
            try {
                const exists = await api.existsUser({
                    value: normalizePhone(value),
                    type: IFieldName.PHONE
                });
                return !exists;
            } catch (error) {
                console.error('Ошибка проверки phone:', error);
                return true;
            }
        }),

    sex: Yup.string().oneOf(Object.values(ICustomSelectValues)).required(),
    countryCode: Yup.string().required()
});

let cachedSchema: typeof createValidationSchema | null = null;

export const getValidationSchema = () => {
    if (!cachedSchema) {
        cachedSchema = createValidationSchema;
    }
    return cachedSchema;
};
