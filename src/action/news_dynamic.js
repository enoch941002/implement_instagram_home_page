export const ADD_NEWS_DYNAMIC = 'ADD_NEWS_DYNAMIC';
export const UPDATE_NEWS_STATE = 'UPDATE_NEWS_STATE';
export const DELETE_NEWS = 'DELETE_NEWS';
export const addNewsDynamic = (info) => ({
    type: ADD_NEWS_DYNAMIC,
    payload: {
        key: info.key,
        text: info.text,
    }
})
export const updateNewsState = (info) => ({
    type: UPDATE_NEWS_STATE,
    payload: {
        key: info.key,
        read: info.read,
    }
})
export const deleteNews = (info) => ({
    type: DELETE_NEWS,
    payload: {
        key: info.key,
    }
})