import { all } from 'redux-saga/effects';
import {mySaga} from "./registrySaga";

export default function* rootSaga() {
    yield all([
        mySaga()
    ]);
}