import { createAction, createReducer } from '@reduxjs/toolkit'
import {SET_AUTH_TOKEN} from "../constants/constants";

const setToken = createAction<string>(SET_AUTH_TOKEN)
const removeToken = createAction<"">(REMOVE_AUTH_TOKEN)

export interface IUserState {
    token: string;
}

let initialState: IUserState = {
    token: "",
}

export const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(setToken, (state, action) => {
        state.token = action.payload;
    });
    builder.addCase(removeToken, (state, action) => {
        state.token = "";
    });
})