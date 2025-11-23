import { createAction, createReducer } from '@reduxjs/toolkit'
import {FETCH_REGISTRY} from "../constants/constants";
import {User} from "../types/types";

const login = createAction<User>(FETCH_REGISTRY)

export interface IAuthState {
    user: Pick<User, "username" | "password"> | null
}

let initialState: IAuthState = {
    user: null,
}

export const loginReducer = createReducer(initialState, (builder) => {
    builder.addCase(login, (state, action) => {
        state.user = action.payload
    });
})