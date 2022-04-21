import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateNewsState } from '../action/news_dynamic'
const NewsDynamicItems = () => {
    const newDynamicItem = useSelector(state => state.newsDynamicReducer.newsDynamic)
    const dispatch = useDispatch();
    const showBlock = (key) => {
        dispatch(updateNewsState({
            key,
            read: true
        }))
    }
    if (newDynamicItem) {
        return newDynamicItem.map((item) => (
            <button type='button' key={item.key} className='dynamicItems' onClick={() => showBlock(item.key)}>
                <div className='photoBackground' style={{ backgroundColor: item.color }}></div>
                <div className='photoFont'>{item.text}</div>
            </button>
        ));
    }
}
export default NewsDynamicItems;