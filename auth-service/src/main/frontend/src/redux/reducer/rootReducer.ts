import {combineReducers} from "@reduxjs/toolkit";
import {registryReducer} from "./registryReducer";
import {loginReducer} from "./loginReducer";

export const rootReducer = combineReducers({
    registry: registryReducer,
    login: loginReducer
})