import {combineReducers} from "@reduxjs/toolkit";
import {registryReducer} from "./registryReducer";
import {loginReducer} from "./loginReducer";
import {existsUsersReducer} from "./existsUsersReducer";

export const rootReducer = combineReducers({
    registry: registryReducer,
    login: loginReducer,
    exist: existsUsersReducer
})