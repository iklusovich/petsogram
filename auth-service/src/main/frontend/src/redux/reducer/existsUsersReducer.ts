import { createAction, createReducer } from '@reduxjs/toolkit'
import {FETCH_EXISTS_SUCCESS} from "../constants/constants";

const exists = createAction<boolean>(FETCH_EXISTS_SUCCESS)

export interface IExistState {
   isExists: boolean;
}

const initialState: IExistState = {
    isExists: false,
}

export const existsUsersReducer = createReducer(initialState, (builder) => {
    builder.addCase(exists, (state, action) => {
        state.isExists = action.payload;
    });
})