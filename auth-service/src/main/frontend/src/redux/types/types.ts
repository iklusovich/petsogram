import {Action} from "redux-saga";
import {
    FETCH_EXISTS, FETCH_EXISTS_ERROR, FETCH_EXISTS_SUCCESS,
    FETCH_LOGIN,
    FETCH_LOGIN_ERROR,
    FETCH_REGISTRY,
    FETCH_REGISTRY_ERROR
} from "../constants/constants";
import {IFieldName} from "../../components/TextField/ITextFieldProps";

//TODO навести порядок в экшенах и типах, какое-то дублирование

export interface User {
    phone: string;
    username: string;
    password: string;
    sex: string;
}

export interface IRequestRegistrationAction extends Action {
    type: typeof FETCH_REGISTRY;
    payload: User;
}

export interface IErrorRegistrationAction extends Error {
    type: typeof FETCH_REGISTRY_ERROR;
    payload: {
        message: string;
    };
}

export interface IRequestLoginAction extends Action {
    type: typeof FETCH_LOGIN;
    payload: Pick<User, "password" | "username">;
}

export interface IErrorLoginAction extends Error {
    type: typeof FETCH_LOGIN_ERROR;
    payload: {
        message: string;
    };
}

export interface IExistsUserAction extends Action {
    type: typeof FETCH_EXISTS;
    payload: {
        value: string;
        type: IFieldName.PHONE | IFieldName.USERNAME;
    };
}

export interface IExistsUserSuccessAction extends Action {
    type: typeof FETCH_EXISTS_SUCCESS;
    payload: boolean;
}

export interface IExistsUserErrorAction extends Error {
    type: typeof FETCH_EXISTS_ERROR;
    payload: {
        message: string;
    };
}