const redux = require("redux");

const createStore = redux.createStore;
const initialState = {
  counter: 0,
  name: "Lakshman"
};
//reducers
const reducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return { ...state, counter: state.counter + 1 }; //update state
  }
  if (action.type === "ADD_COUNTER") {
    console.log("sdhsdjh");
    return { ...state, counter: state.counter + action.value };
  }
  return state;
};

//store
const store = createStore(reducer);

console.log("State: ", store.getState());
//subscription
store.subscribe(() => {
  console.log("subscription: ", store.getState());
});
//dispatch action
store.dispatch({
  type: "INC_COUNTER",
  value: 10
});
store.dispatch({
  type: "INC_COUNTER"
});
// store.dispatch({
//   type: "INC_COUNTER"
// });
// store.dispatch({
//   type: "INC_COUNTER"
// });
store.dispatch({
  type: "ADD_COUNTER",
  value: 12
});
