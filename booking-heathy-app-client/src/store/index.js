import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../reducers";
import sagas from "../sagas";

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = compose(applyMiddleware(sagaMiddleware))(
  createStore
);

export const store = createStoreWithMiddleware(reducers, initialState);

sagaMiddleware.run(sagas);
