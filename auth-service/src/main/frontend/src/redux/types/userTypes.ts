import {Action} from "redux-saga";
import {SET_AUTH_TOKEN} from "../constants/constants";

export interface ISetTokenAction extends Action {
    type: typeof SET_AUTH_TOKEN;
    payload: string;
}

