import {call, put, takeLatest} from "redux-saga/effects";
import {api} from "../api/api";
import {fetchLoginSuccessAction, fetchSuccessAction} from "../redux/actions/actions";
import {IRequestLoginAction, IRequestRegistrationAction, User} from "../redux/types/types";
import {FETCH_LOGIN, FETCH_LOGIN_ERROR, FETCH_REGISTRY, FETCH_REGISTRY_ERROR} from "../redux/constants/constants";

function* fetchRegistrySaga(action: IRequestRegistrationAction) {
    try {
        const data = action.payload;
        const user: User = yield call(api.registration, data);
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

function* fetchLoginSaga(action: IRequestLoginAction) {
    try {
        const data = action.payload;
        const user: Pick<User, "password" | "username"> = yield call(api.login, data);
        yield put(fetchLoginSuccessAction(user));
    } catch ({code, message, name}) {
        const serializableError = {
            message: message,
            name: name,
            code: code,
        };
        yield put({ type: FETCH_LOGIN_ERROR, payload: serializableError });
    }
}

export function* mySaga() {
    yield takeLatest(FETCH_REGISTRY, fetchRegistrySaga);
    yield takeLatest(FETCH_LOGIN, fetchLoginSaga);
}