import logger from 'redux-logger';

import { configureStore } from '@reduxjs/toolkit'
import newsDynamicReducer from 'features/newsDynamic/newsDynamicSlice'
import postsReducer from 'features/posts/postsSlice'
export const store = configureStore({
    reducer: {
        news:newsDynamicReducer,
        posts:postsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})