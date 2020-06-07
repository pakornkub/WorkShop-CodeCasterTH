/*import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header'
import Footer from './Footer'

const App = () => {

  const [num,setNum] = useState(0);

  const handleFooterClicked = (n) => {

    setNum(n)

  }

  return (
    <div>
      <Header currentUser='Pakorn' isLoggedIn />
      <div>Hello Pakorn Worakarn {num}</div>
      <Footer onTimerClick={handleFooterClicked}/>
    </div>
  );
}

export default App;*/

import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  const handleTodoClicked = (input) => {
    //setTodoItems(currentTodoItems => currentTodoItems.concat(input)); //concat = Join two arrays
    setTodoItems((currentTodoItems) => [input, ...currentTodoItems]);
  };

  return (
    <div>
      <TodoInput onTodoClick={handleTodoClicked} />
      <TodoList items={todoItems} />
    </div>
  );
};

export default App;
