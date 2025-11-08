import {Action} from "redux-saga";
import {FETCH_REGISTRY, FETCH_REGISTRY_ERROR} from "../constants/constants";

export interface User {
    id: string;
    phone: string;
    username: string;
    password: string;
    sex: string;
}

export interface IRequestAction extends Action {
    type: typeof  FETCH_REGISTRY;
    payload: User;
}
export interface IErrorAction extends Error {
    type: typeof  FETCH_REGISTRY_ERROR;
    payload: {
        message: string;
    };
}