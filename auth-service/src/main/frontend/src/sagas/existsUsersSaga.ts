import {call, put, takeLatest} from "redux-saga/effects";
import {api} from "../api/api";
import {fetchExistsErrorAction, fetchExistsSuccessAction} from "../redux/actions/actions";
import {IRequestRegistrationAction, User} from "../redux/types/types";
import {FETCH_EXISTS} from "../redux/constants/constants";

function* fetchExistsSaga(action: IRequestRegistrationAction) {
    try {
        const data = action.payload;
        const user: User = yield call(api.registration, data);
        yield put(fetchExistsSuccessAction(user));
    } catch ({code, message, name}) {
        // TODO remove cast
        yield put(fetchExistsErrorAction(message as string));
    }
}

export function* existsSaga() {
    yield takeLatest(FETCH_EXISTS, fetchExistsSaga);
}