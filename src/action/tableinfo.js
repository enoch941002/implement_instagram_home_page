export const ADD_TO_TABLE = 'ADD_TO_TABLE';
export const addToTable = (info) => ({
    type: ADD_TO_TABLE,
    payload: {
        key:info.key,
        firstName:info.firstName,
        lastName:info.lastName,
    },
});
