import {
    FETCH_REGISTRY,
    FETCH_REGISTRY_SUCCESS,
    FETCH_REGISTRY_ERROR,
    FETCH_LOGIN,
    FETCH_LOGIN_SUCCESS, FETCH_LOGIN_ERROR, FETCH_EXISTS, FETCH_EXISTS_SUCCESS, FETCH_EXISTS_ERROR
} from "../constants/constants";
import {User} from "../types/types";

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

export const fetchExistsAction   = (user: Pick<User, "phone" | "username">) => {
    return {
        type: FETCH_EXISTS,
        payload: user
    }
}

export const fetchExistsSuccessAction   = (user: Pick<User, "phone" | "username">) => {
    return {
        type: FETCH_EXISTS_SUCCESS,
        payload: user
    }
}

export const fetchExistsErrorAction   = (error: string) => {
    return {
        type: FETCH_EXISTS_ERROR,
        payload: error
    }
}