import * as actions from '../action/tableinfo';
const initState = {
    tableList: [],
};
const tableReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.ADD_TO_TABLE:
            return {
                ...state,
                tableList:[
                    ...state.tableList,
                    {key:action.payload.key,
                    firstName:action.payload.firstName,
                    lastName:action.payload.lastName}
                ]
            }
        default:
            return state;
    }
};

export default tableReducer;