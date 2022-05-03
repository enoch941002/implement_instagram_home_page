import { createSlice } from '@reduxjs/toolkit'

export const newsDynamicSlice = createSlice({
    name: 'news',
    initialState:{
        newsDynamic:[]
    },
    reducers: {
        addNewsDynamic: (state, action) => {
            const color = ['#dc3278', '#f16f3f', '#ffc83d', '#9cb258', '#1787ee', '#9d47dd', '#868686', '#89db79', '#F7923B']
            state.newsDynamic = [
                ...state.newsDynamic,
                {
                    key: action.payload.key,
                    text: action.payload.text,
                    color: color[Math.floor(Math.random() * color.length)],
                    read: false
                }
            ]
        },
        updateNewsState:(state, action) =>{
            const lastestNewsDynamic = state.newsDynamic.map(item => {
                if (item.key === action.payload.key) {
                    return {
                        ...item,
                        read: action.payload.read
                    }
                }
                return { ...item }
            })
            state.newsDynamic = [...lastestNewsDynamic]
        },
        deleteNews:(state,action)=>{
            state.newsDynamic = [
                ...state.newsDynamic.filter(item => {
                    return item.key !== action.payload.key
                })
            ]
        }
    }
})
export const { addNewsDynamic, updateNewsState, deleteNews } = newsDynamicSlice.actions

export default newsDynamicSlice.reducer
// const newsDynamicReducer = (state = initState, action) => {
//     const color = ['#dc3278', '#f16f3f', '#ffc83d', '#9cb258', '#1787ee', '#9d47dd', '#868686', '#89db79', '#F7923B']

//     switch (action.type) {
//         case actions.ADD_NEWS_DYNAMIC:
//             return {
//                 ...state,
//                 newsDynamic: [
//                     ...state.newsDynamic,
//                     {
//                         key: action.payload.key,
//                         text: action.payload.text,
//                         color: color[Math.floor(Math.random() * color.length)],
//                         read: false
//                     }
//                 ]
//             }
//         case actions.UPDATE_NEWS_STATE:
//             const lastestNewsDynamic = state.newsDynamic.map(item => {
//                 if (item.key === action.payload.key) {
//                     return {
//                         ...item,
//                         read: action.payload.read
//                     }
//                 }
//                 return { ...item }
//             })
//             return {
//                 ...state,
//                 newsDynamic: [...lastestNewsDynamic]
//             }
//         case actions.DELETE_NEWS:
//             return {
//                 newsDynamic: [
//                     ...state.newsDynamic.filter(item => {
//                         return item.key !== action.payload.key
//                     })
//                 ]
//             }
//         default:
//             return state;
//     }
// };

// export default newsDynamicReducer;