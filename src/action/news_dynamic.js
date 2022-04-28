export const ADD_NEWS_DYNAMIC = 'ADD_NEWS_DYNAMIC';
export const UPDATE_NEWS_STATE = 'UPDATE_NEWS_STATE';
export const DELETE_NEWS = 'DELETE_NEWS';
export const addNewsDynamic = (info) => ({
    type: ADD_NEWS_DYNAMIC,
    payload: {
        ...info
    }
})
export const updateNewsState = (info) => ({
    type: UPDATE_NEWS_STATE,
    payload: {
        ...info
    }
})
export const deleteNews = (info) => ({
    type: DELETE_NEWS,
    payload: {
        ...info
    }
})