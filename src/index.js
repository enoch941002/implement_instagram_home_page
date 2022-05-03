import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'css/index.css';
import { Provider, useDispatch } from 'react-redux';
import { store } from 'store';
import { Body } from 'features/newsDynamic/Body'
import { addNewsDynamic } from 'features/newsDynamic/newsDynamicSlice';
import Items from 'features/items/Items'
import Block from 'features/newsDynamic/Block'

const Hat = () => {
  console.log('20220503 update!')
  const dispatch = useDispatch();
  const [posts, setPosts] = useState('');
  const handleClick = (e) => {
    if (e.key === 'Enter' && posts) {
      dispatch(addNewsDynamic({
        key: new Date().getTime(),
        text: posts
      }))
      // setPosts('')
    }
  }
  return (
    <div className='hatContainer'>
      <div id='hat'>
        <Logo />
        <div id='search'>
          <input type='text' placeholder='輸入產生一個限時動態' value={posts}
            onChange={(e) => { setPosts(e.target.value) }}
            onKeyPress={handleClick}></input>
        </div>
        <div id='item_top'>
          <Items />
        </div>
      </div>
    </div>

  )

}
const Logo = () => {
  return (
    <div>
      <a href='./' id='logo'>Fake Instagram</a>
    </div>
  )
}

const Main = () => {
  return (
    <div id='main'>
      <Hat />
      <Body />
      <Block />
    </div>
  );
};
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <Main />
  </Provider>
);