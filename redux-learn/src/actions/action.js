export const increment = () => {
  //do something
  return {
    type: "INC_COUNTER"
  };
};

export const asyncIncrement = () => {
  return dispatch => {
    //async call
    setTimeout(() => {
      dispatch(increment());
    }, 2000);
  };
};
