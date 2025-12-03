import React, { useReducer } from "react";
import ShoppingReducer from "../reducer/ShoppingReducer";

const ShoppingCart = () => {
  const [cart, dispatch] = useReducer(ShoppingReducer, []);
  return (
    <div style={{textAlign:"center"}}>
      <h2 className="title">shopping cart</h2>
      <button
        className="btn"
        onClick={() => dispatch({ type: "ADD_ITM", payload: "apple" })}
      >
        Add Apple
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "ADD_ITM", payload: "Orange" })}
      >
        Add Orange
      </button>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            {item.name}(<span className="qty">x</span>
            {item.qty})
            <button
              className="btn"
              onClick={() => dispatch({ type: "INCREASE", payload: item.id })}
            >
              ➕
            </button>
            <button
              className="btn"
              onClick={() => dispatch({ type: "DICREMENT", payload: item.id })}
            >
             ➖
            </button>
            <button
              className="btn"
              onClick={() => dispatch({ type: "REMOVE_ITM", payload: item.id })}
            >
              ✖️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
