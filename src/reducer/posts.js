import * as actions from '../action/posts';
const initState = {
    posts: [
        {
            "id": 1,
            "author": "someone1",
            "located": "Hong Kong",
            "color": "rgb(132 199 255)",
            "desc": "some desc1 some desc1 some desc1 some desc1 some desc1",
            "postid": 1,
            "time": 1651068405,
            "comment": []
        },
        {
            "id": 2,
            "author": "someone2",
            "located": "Taiwan",
            "color": "rgb(247, 146, 59)",
            "desc": "some desc2 some desc2 some desc2 some desc2 some desc2",
            "postid": 2,
            "time": 1651156840,
            "comment": []
        }
        // {
        //     name:'who',
        //     content:'213',
        //     time:1651156840
        // }
    ],
};
const postsReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.NEW_POSTS:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    { ...action.payload }
                ]
            }
        case actions.NEW_COMMENT:
            const updateComments = state.posts.map(item=>{
                if(item.postid === action.payload.postid){
                    item.comment.push({...action.payload.comment})
                    return {
                        ...item,
                        comment:item.comment
                    }
                }
                return item
            })
            return {
                ...state,
                posts:[...updateComments]
            }
        default:
            return state;
    }
}
export default postsReducer