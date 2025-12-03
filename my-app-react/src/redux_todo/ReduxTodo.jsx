import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/store'
import Add_Todo from './Add_Todo'
import TodoList from './Todolist'

function ReduxTodo() {
  return (
    <div className='app'>
        <Provider store={store}>
            <h1>To-Do List</h1>

            <Add_Todo/>
            <TodoList/>
        </Provider>
      
    </div>
  )
}

export default ReduxTodo