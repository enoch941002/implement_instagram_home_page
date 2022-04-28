export const NEW_POSTS = 'NEW_POSTS'
export const NEW_COMMENT = 'NEW_COMMENT'
export const newPosts = (data) => ({
    type: NEW_POSTS,
    payload: {
        ...data
    }
})
export const newComment = (data) => ({
    type: NEW_COMMENT,
    payload: {
        postid:data.postid,
        comment:{
            ...data.comment
        }
    }
})