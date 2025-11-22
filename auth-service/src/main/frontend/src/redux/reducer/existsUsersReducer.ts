import { createAction, createReducer } from '@reduxjs/toolkit'
import {FETCH_EXISTS} from "../constants/constants";
import {IFieldName} from "../../components/TextField/ITextFieldProps";

const exists = createAction<{
    value: string;
    type: IFieldName.PHONE | IFieldName.USERNAME;
}>(FETCH_EXISTS)

interface State {
    value: string,
    type: IFieldName.USERNAME | IFieldName.PHONE
}

let initialState: State = {
    value: "",
    type: IFieldName.USERNAME
}

export const existsUsersReducer = createReducer(initialState, (builder) => {
    builder.addCase(exists, (state, action) => {
        state.value = action.payload.value;
        state.type = action.payload.type;
    });
})