import { createAction, createReducer } from '@reduxjs/toolkit'
import {FETCH_REGISTRY} from "../constants/constants";
import {User} from "../types/types";

const registry = createAction<User>(FETCH_REGISTRY)

interface State {
    user: User | null
}

let initialState: State = {
    user: null,
}
export const registryReducer = createReducer(initialState, (builder) => {
    builder.addCase(registry, (state, action) => ({
        user: action.payload,
    }));
})