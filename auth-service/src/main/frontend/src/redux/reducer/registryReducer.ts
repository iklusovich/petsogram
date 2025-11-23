import { createAction, createReducer } from '@reduxjs/toolkit'
import {FETCH_REGISTRY, FETCH_REGISTRY_ERROR, FETCH_REGISTRY_SUCCESS} from "../constants/constants";
import {User} from "../types/types";

const registry = createAction<User>(FETCH_REGISTRY);
const registrySuccess = createAction<null>(FETCH_REGISTRY_SUCCESS);
const registryError = createAction<null>(FETCH_REGISTRY_ERROR);

export interface IRegistrationState {
    user: User | null
    loading: boolean
}

let initialState: IRegistrationState = {
    user: null,
    loading: false
}
export const registryReducer = createReducer(initialState, (builder) => {
    builder.addCase(registry, (state, action) => {
        state.user = action.payload
        state.loading = true
    });
    builder.addCase(registrySuccess, (state, action) => {
        state.user = null
        state.loading = false
    });
    builder.addCase(registryError, (state, action) => {
        state.user = null
        state.loading = false
    });
})