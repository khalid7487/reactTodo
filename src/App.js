import React, { useState, useEffect } from 'react'
import './App.css';

import Form from './component/Form';
import TodoList from './component/TodoList';


function App() {


  //state staff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //use effect 
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  //functions 
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);


    }
  }

  return (
    <div className="App">
      <header>
        <h1>Khalid's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setTodos={setTodos}
        todos={todos}
        setInputText={setInputText}
        setStatus={setStatus}
        
      />
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
