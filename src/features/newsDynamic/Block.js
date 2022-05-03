import 'css/Block.css'
import React from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { deleteNews } from './newsDynamicSlice'
const Block = () => {
    const showNewsDynamic = useSelector(state => state.news.newsDynamic)
    const dispatch = useDispatch()
    const closeBlock = (key)=>{
        dispatch(deleteNews({
            key
        }))
    }
    if (showNewsDynamic) {
        return showNewsDynamic.map(item => {
            if (item.read) {
                return (
                    <div id="block" className='stateOn' key={item.key}>
                        <div className='photoArea' style={{ backgroundColor: item.color }}>{item.text}</div>
                        <button type='button' className='closeBlock' onClick={() => closeBlock(item.key)}>Close</button>
                    </div>
                )
            }
            return ''
        })
    }

}
export default Block;