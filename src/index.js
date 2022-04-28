import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
import { Provider, useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import store from './store';
import { addToTable } from './action/tableinfo';
import { addNewsDynamic } from './action/news_dynamic';
import { Items, Body, Block } from './component';
const Task = (props) => {
  const { task } = props;
  return (
    <tr key={task.key}>
      <td>{task.firstName}</td><td>{task.lastName}</td>
    </tr>
  );
};

Task.propTypes = {
  task: PropTypes.object,
};

Task.defaultProps = {
  task: { firstName: '', lastName: '' },
};
const Hat = () => {
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
const TableList = () => {
  const tableList = useSelector(state => state.tableReducer.tableList);
  if (tableList) {
    return tableList.map((task) => (
      <Task task={task} key={task.key} />
    ));
  }
  return;

};

const TodoListPage = () => (
  <div style={{display:'none'}}>
    <table>
      <thead>
        <tr>
          <th>FIRST NAME</th><th>LAST NAME</th>
        </tr>
      </thead>
      <tbody>
        <TableList />
      </tbody>
    </table>

  </div>
);
const Main = () => {
  const dispatch = useDispatch();
  // const tableList = useSelector(state => state.tableList);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  return (
    <div id='main'>
      <Hat />
      <Body />
      <Block />
      <div style={{display:'none'}}>
        <input value={firstName} onChange={(e) => { setFirstName(e.target.value); }} />
        <input value={lastName} onChange={(e) => { setLastName(e.target.value); }} />
        <button type="button" onClick={() => {
          dispatch(addToTable({
            key: new Date().getTime(),
            firstName: firstName,
            lastName: lastName
          }));
        }}>
          新增
        </button>
      </div>
      <TodoListPage />
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