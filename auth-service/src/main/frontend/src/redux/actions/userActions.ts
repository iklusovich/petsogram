import {SET_AUTH_TOKEN} from "../constants/constants";

export const setUserTokenAction = (token: string) => {
    return { type: SET_AUTH_TOKEN, token };
}