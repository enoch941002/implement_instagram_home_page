import React, { useState } from 'react';
import '../css/Posts.css'
import { useSelector, useDispatch } from 'react-redux';
import { newComment } from '../action/posts'
const Article = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.postsReducer.posts)
    const sec = parseInt(new Date().getTime() / 1000);
    const [myInput, setMyInput] = useState([
        { value: '' },
        { value: '' }
    ])
    const sendData = (index, e, id) => {
        if (e.key === 'Enter' && myInput[index].value) {
            dispatch(newComment({
                postid: id,
                comment: {
                    name: 'me',
                    content: myInput[index].value,
                    time: new Date().getTime()
                }
            }))
            let values = [...myInput]
            values[index] = { value: '' }
            setMyInput(values)
        }
    }
    const handleMyInput = (index, value) => {
        let values = [...myInput]
        values[index] = { value }
        setMyInput(values)
    }
    return (
        <article>{
            posts.map((item, i) => {
                let times = parseInt(sec - item.time)
                let date = {
                    day: 0,
                    hour: 0,
                    mins: 0,
                    sec: times
                }
                while (date.sec >= 60) {
                    date.mins++
                    date.sec -= 60
                }
                while (date.mins >= 60) {
                    date.hour++
                    date.mins -= 60
                }
                while (date.hour >= 24) {
                    date.day++
                    date.hour -= 24
                }
                const comments = item.comment.map(commentsItem => {
                    return (
                        <div className='content' key={commentsItem.time}>
                            <span className='author'>{commentsItem.name}</span>
                            <p className='desc'>{commentsItem.content}</p>
                        </div>
                    )
                })
                const combineString = `${date.day === 0 ? '' : `${date.day}天`}${date.hour === 0 ? '' : `${date.hour}小時`}${date.mins === 0 ? '' : `${date.mins}分`}${date.sec === 0 ? '' : `${date.sec}秒`}`
                return (
                    <div key={item.id} className='posts'>
                        <header>
                            <div><span className='author'>{item.author}</span></div>
                            <div><span className='located'>{item.located}</span></div>
                        </header>
                        <div className='background' style={{ backgroundColor: item.color }}></div>
                        <div className='interactive'>
                            <section className='posts_session'>
                                <div>
                                    <span><button type='button'><svg aria-label="讚" className="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg></button></span>
                                    <span><button><svg aria-label="回應" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg></button></span>
                                    <span><button><svg aria-label="分享貼文" className="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg></button></span>
                                </div>
                                <div><span><button><svg aria-label="儲存" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg></button></span></div>
                            </section>
                            <div className='content'>
                                <span className='author'>{item.author}</span>
                                <p className='desc'>{item.desc}</p>
                            </div>
                            <div>{comments}</div>
                            <time className='times'>{`${combineString}前`}</time>
                            <div className='comment_area'>
                                <input type='text' placeholder='留言...' className='comment_input'
                                    onKeyPress={(e) => sendData(i, e, item.postid)}
                                    value={myInput[i].value}
                                    onChange={(e) => { handleMyInput(i, e.target.value) }}></input>
                            </div>
                        </div>
                    </div>
                )
            })
        }</article>
    )
}
export default Article