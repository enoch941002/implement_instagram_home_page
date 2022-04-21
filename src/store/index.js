import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import tableReducer from '../reducer/tableinfo';
import newsDynamicReducer from '../reducer/news_dynamic';

const rootReducer = combineReducers({
    tableReducer,
    newsDynamicReducer
})
const store = createStore(
    rootReducer, applyMiddleware(logger)
);

export default store;