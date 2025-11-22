import {CountryCode} from "libphonenumber-js";

export interface IFormValues {
    username: string;
    password: string;
    repeatPassword: string;
    sex: string;
    phone: string;
    countryCode: CountryCode;
    [key: string]: string;
}
