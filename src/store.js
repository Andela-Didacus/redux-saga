import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer, rootSaga } from './modules';

const sagaMiddleWare = createSagaMiddleware();

var middleWare = applyMiddleware(sagaMiddleWare);

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore( rootReducer, {}, composeEnhancers(
    middleWare
));

sagaMiddleWare.run(rootSaga);