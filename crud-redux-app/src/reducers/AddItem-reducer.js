const itemsReducer = (state=[],action) => {
    console.log(action.type)
    switch(action.type){
       
    case 'ADD_ITEM':
    //return state.concat([action.data]);
    return [
        ...state,
        {
          id: action.id,
          item: action.item
         
        }
      ]

    case 'DELETE_ITEM':
    console.log(state.filter((item) => item.id !== action.id))
      return state.filter((item) => item.id !== action.id)
   

    default:
    return state;
    }
}
export default itemsReducer;