// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;

import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div style={{textAlign:'center',marginTop:'20px'}}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App;
