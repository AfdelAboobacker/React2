import { createStore } from "redux";
import todoReducer from "./resducers";

const store = createStore(todoReducer);

export default store;
