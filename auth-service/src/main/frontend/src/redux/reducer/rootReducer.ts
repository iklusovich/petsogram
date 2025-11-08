import {combineReducers} from "@reduxjs/toolkit";
import {registryReducer} from "./registryReducer";

export const rootReducer = combineReducers({
    registry: registryReducer
})