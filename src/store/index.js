import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import tableReducer from '../reducer/tableinfo';
import newsDynamicReducer from '../reducer/news_dynamic';
import postsReducer from '../reducer/posts';

const rootReducer = combineReducers({
    tableReducer,
    postsReducer,
    newsDynamicReducer
})
const store = createStore(
    rootReducer, applyMiddleware(logger)
);

export default store;