import {Action} from "redux-saga";
import {FETCH_LOGIN, FETCH_LOGIN_ERROR, FETCH_REGISTRY, FETCH_REGISTRY_ERROR} from "../constants/constants";

export interface User {
    phone: string;
    username: string;
    password: string;
    sex: string;
}

export interface IRequestRegistrationAction extends Action {
    type: typeof  FETCH_REGISTRY;
    payload: User;
}
export interface IErrorRegistrationAction extends Error {
    type: typeof  FETCH_REGISTRY_ERROR;
    payload: {
        message: string;
    };
}

export interface IRequestLoginAction extends Action {
    type: typeof  FETCH_LOGIN;
    payload: Pick<User, "password" | "username">;
}
export interface IErrorLoginAction extends Error {
    type: typeof  FETCH_LOGIN_ERROR;
    payload: {
        message: string;
    };
}