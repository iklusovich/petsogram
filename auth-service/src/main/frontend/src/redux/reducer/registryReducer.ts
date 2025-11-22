import { createAction, createReducer } from '@reduxjs/toolkit'
import {FETCH_REGISTRY, FETCH_REGISTRY_ERROR, FETCH_REGISTRY_SUCCESS} from "../constants/constants";
import {User} from "../types/types";

const registry = createAction<User>(FETCH_REGISTRY);
const registrySuccess = createAction<null>(FETCH_REGISTRY_SUCCESS);
const registryError = createAction<null>(FETCH_REGISTRY_ERROR);

interface State {
    user: User | null
    loading: boolean
}

let initialState: State = {
    user: null,
    loading: false
}
export const registryReducer = createReducer(initialState, (builder) => {
    builder.addCase(registry, (state, action) => ({
        user: action.payload,
        loading: true
    }));
    builder.addCase(registrySuccess, (state, action) => ({
        user: null,
        loading: false
    }));
    builder.addCase(registryError, (state, action) => ({
        user: null,
        loading: false
    }));
})