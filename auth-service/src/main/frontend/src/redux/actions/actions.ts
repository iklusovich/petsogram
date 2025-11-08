import {FETCH_REGISTRY, FETCH_REGISTRY_SUCCESS, FETCH_REGISTRY_ERROR} from "../constants/constants";
import {User} from "../types/types";

export function fetchRegistryAction  (user: User) {
    return {
        type: FETCH_REGISTRY,
        payload: user as User
    }
}

export const fetchSuccessAction = (user: User) => {
    return {
        type: FETCH_REGISTRY_SUCCESS,
        payload: user
    }
}

export const fetchErrorAction = (error: Error) => {
    return {
        type: FETCH_REGISTRY_ERROR,
        payload: error
    }
}