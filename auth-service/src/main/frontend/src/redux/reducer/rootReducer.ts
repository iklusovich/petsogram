import {combineReducers} from "@reduxjs/toolkit";
import {registryReducer} from "./registryReducer";
import {loginReducer} from "./loginReducer";
import {existsUsersReducer} from "./existsUsersReducer";
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({
    registry: registryReducer,
    login: loginReducer,
    exist: existsUsersReducer,
    token: userReducer,
})