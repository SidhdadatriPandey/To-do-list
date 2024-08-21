import React from 'react';
import "./Style.css";
import { Todo } from './model';
import SingleTodo from './SingleTodo';


interface Prop{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}
const Todolist: React.FC<Prop> = ({todos,setTodos}) => {
  return (
    <div>
      {
        todos.map((todo)=>{
            return <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
        })
      }
    </div>
  )
}

export default Todolist
