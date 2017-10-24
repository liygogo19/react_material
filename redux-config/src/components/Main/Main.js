/**
 * Created by liyang on 2017/9/26.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeaderContainer from '../TodoHeader/TodoHeader'
import TodoListContainer from '../TodoList/TodoList';

const Main = () => (
    <div>
        <TodoHeaderContainer />
        <TodoListContainer />
    </div>
);

export default Main;