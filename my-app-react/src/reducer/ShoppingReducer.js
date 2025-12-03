export default function ShoppingReducer(state, action) {
  switch (action.type) {
    case "ADD_ITM":
      return [...state, { id: Date.now(), name: action.payload, qty: 1 }];
    case "REMOVE_ITM":
      return state.filter((item) => item.id !== action.payload);
    case "INCREASE":
      return state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );
    case "DICREMENT":
      return state.map((item) =>
        item.id === action.payload && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );
  }
}
