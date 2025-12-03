import React, { useReducer } from "react";
import counterReducer from "../reducer/CounterReduce";

const Counter = () => {
  const [state,dispatch]=useReducer(counterReducer,{count:0})
  return (
    <div style={{textAlign:'center'}}>
      <h1>count:{state.count}</h1>
      <button onClick={()=>{dispatch({type:"INCREMENT"})}}>+</button>
      <button onClick={()=>{dispatch({type:"DICREMENT"})}} >-</button>
      <button onClick={()=>{dispatch({type:"RESET"})}}>reset</button>
    </div>
  );
};

export default Counter ;
