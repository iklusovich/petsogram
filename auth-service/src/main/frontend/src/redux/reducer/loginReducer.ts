import { createAction, createReducer } from '@reduxjs/toolkit'
import {FETCH_REGISTRY} from "../constants/constants";
import {User} from "../types/types";

const login = createAction<User>(FETCH_REGISTRY)

interface State {
    user: Pick<User, "username" | "password"> | null
}

let initialState: State = {
    user: null,
}

export const loginReducer = createReducer(initialState, (builder) => {
    builder.addCase(login, (state, action) => ({
        user: action.payload,
    }));
})