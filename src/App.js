import React, {useState} from 'react'
import './App.css';

import Form from './component/Form';
import TodoList from './component/TodoList';


function App() {
  const [inputText , setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Khalid's Todo List</h1>
      </header>
      <Form inputText={inputText} setTodos={setTodos} todos={todos} setInputText={setInputText}/>
      <TodoList/>
    </div>
  );
}

export default App;
