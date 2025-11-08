import {call, put, takeLatest} from "redux-saga/effects";
import {api} from "../api/api";
import {fetchSuccessAction} from "../redux/actions/actions";
import {IRequestAction, User} from "../redux/types/types";
import {FETCH_REGISTRY, FETCH_REGISTRY_ERROR} from "../redux/constants/constants";

function* fetchRegistrySaga(action: IRequestAction) {
    try {
        const data = action.payload;
        const user: User = yield call(api.auth, data);
        yield put(fetchSuccessAction(user));
    } catch ({code, message, name}) {
        const serializableError = {
            message: message,
            name: name,
            code: code,
        };
        yield put({ type: FETCH_REGISTRY_ERROR, payload: serializableError });
    }
}

export function* mySaga() {
    yield takeLatest(FETCH_REGISTRY, fetchRegistrySaga);
}