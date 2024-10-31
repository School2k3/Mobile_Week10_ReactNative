import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import contentReducer from './reducers/contentReducer';
import contentSaga from './sagas/contentSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  contents: contentReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(contentSaga);

export default store;
