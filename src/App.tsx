import React, { useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import {Todo} from "./Components/model";
import Todolist from './Components/Todolist';

const App: React.FC =()=>{
  const [todo,setTodo]=useState<string>("");
  const[todos,setTodos]=useState<Todo[]>([]);
  function handleAdd(e: React.FormEvent<EventTarget>){
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}]);
      setTodo("");
    }
    console.log(todos);
  }
  
  return (
    <div className="App">
      <h1>TO-DO-LIST</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <Todolist todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
