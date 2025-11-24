import {call, put, takeLatest} from "redux-saga/effects";
import {api} from "../api/api";
import {actions} from "../redux/actions/actions";
import {IExistsUserAction} from "../redux/types/types";
import {FETCH_EXISTS} from "../redux/constants/constants";


function* fetchExistsSaga(action: IExistsUserAction) {

    const {fetchExistsErrorAction, fetchExistsSuccessAction} = actions;

    try {
        const {value, type} = action.payload;
        const res: boolean = yield call(api.existsUser, {
            value, type
        });
        yield put(fetchExistsSuccessAction(res));
    } catch (error: unknown) {
        if (error instanceof Error) {
            yield put(fetchExistsErrorAction(error.message));
        } else if (typeof error === 'string') {
            yield put(fetchExistsErrorAction(error));
        } else {
            yield put(fetchExistsErrorAction('Unknown error occurred'));
        }
    }
}

export function* existsSaga() {
    yield takeLatest(FETCH_EXISTS, fetchExistsSaga);
}