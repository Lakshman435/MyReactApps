 let itemId = 0;
 export const addItem = item =>({
    type:'ADD_ITEM',
    id:itemId++,
    item
    
 })
 export const deleteItem = id =>({
     type:'DELETE_ITEM',
     id
 })