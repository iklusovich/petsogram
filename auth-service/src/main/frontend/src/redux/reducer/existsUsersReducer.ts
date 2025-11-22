import { createAction, createReducer } from '@reduxjs/toolkit'
import {FETCH_EXISTS} from "../constants/constants";
import {User} from "../types/types";

const login = createAction<User>(FETCH_EXISTS)

interface State {
    user: Pick<User, "username" | "phone"> | null
}

let initialState: State = {
    user: null,
}

export const existsUsersReducer = createReducer(initialState, (builder) => {
    builder.addCase(login, (state, action) => ({
        user: action.payload,
    }));
})