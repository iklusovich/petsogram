import { all } from 'redux-saga/effects';
import {mySaga} from "./registrySaga";
import {existsSaga} from "./existsUsersSaga";

export default function* rootSaga() {
    yield all([
        mySaga(),
        existsSaga()
    ]);
}