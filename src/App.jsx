import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import React from "react";

import ToDoItems from './ToDoItems';



// import AppName from './AppName'
import AddTodo from './AddTodo'
import AppName from "./AppName"
import Hello from './Hello'
import AlltheseitemProvider from './store/TodoItems.store';
import {Alltheseitem} from './store/TodoItems.store'
// import Container from './Container'
function App() {



  return (
  <div> 
  <AlltheseitemProvider>
    <AppName ></AppName>
   
    <AddTodo  ></AddTodo>
    
    <ToDoItems></ToDoItems>
    <Hello ></Hello>
    </AlltheseitemProvider>
  </div>
  )
}

export default App;
