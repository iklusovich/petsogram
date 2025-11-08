import { configureStore } from '@reduxjs/toolkit'
import {rootReducer} from "../reducer/rootReducer";
import createSagaMiddleware from "redux-saga"
import rootSaga from "../../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;