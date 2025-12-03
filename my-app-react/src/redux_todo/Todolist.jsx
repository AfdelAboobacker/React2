import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { toogleTodo,deletTodo } from '../store/actions';
const Todolist = () => {
    const todos =useSelector((state)=>state.todos);
    const dispatch=useDispatch();

  return (
    <ul>
        {todos.map((todos)=>(
            <li key={todos.id} style={{textDecoration:todos.completed ?'line-through':'none'}}>
                {todos.text}
                <button onClick={()=>dispatch(toogleTodo(todos.id))}>
                    {todos.completed ? 'Undo':'Completed'}
                </button>
                <button onClick={()=>dispatch} ></button>
            </li>
        ))}
    </ul>
  )
}

export default Todolist
