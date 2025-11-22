import {
    FETCH_REGISTRY,
    FETCH_REGISTRY_SUCCESS,
    FETCH_REGISTRY_ERROR,
    FETCH_LOGIN,
    FETCH_LOGIN_SUCCESS, FETCH_LOGIN_ERROR, FETCH_EXISTS, FETCH_EXISTS_SUCCESS, FETCH_EXISTS_ERROR
} from "../constants/constants";
import {User} from "../types/types";
import {IFieldName} from "../../components/TextField/ITextFieldProps";

//TODO навести порядок в экшенах и типах, какое-то дублирование, возможно возвращать надо typeof конкретного типа (MIDDLE)

export function fetchRegistryAction  (user: User) {
    return {
        type: FETCH_REGISTRY,
        payload: user
    }
}

export const fetchSuccessAction = (user: User) => {
    return {
        type: FETCH_REGISTRY_SUCCESS,
        payload: user
    }
}

export const fetchErrorAction = (error: string) => {
    return {
        type: FETCH_REGISTRY_ERROR,
        payload: error
    }
}

export function fetchLoginAction  (user: Pick<User, "password" | "username">) {
    return {
        type: FETCH_LOGIN,
        payload: user
    }
}

export const fetchLoginSuccessAction = (user: Pick<User, "password" | "username">) => {
    return {
        type: FETCH_LOGIN_SUCCESS,
        payload: user
    }
}

export const fetchLoginErrorAction = (error: string) => {
    return {
        type: FETCH_LOGIN_ERROR,
        payload: error
    }
}

export const fetchExistsAction   = (value: string, type: IFieldName.PHONE | IFieldName.USERNAME) => {
    return {
        type: FETCH_EXISTS,
        payload: {value, type}
    }
}

export const fetchExistsSuccessAction   = (payload: boolean) => {
    return {
        type: FETCH_EXISTS_SUCCESS,
        payload
    }
}

export const fetchExistsErrorAction   = (error: string) => {
    return {
        type: FETCH_EXISTS_ERROR,
        payload: error
    }
}