import React from 'react'
import { Todo } from './model'
import { MdDelete,MdDoneOutline } from "react-icons/md";
import "./Style.css";

interface Props{
  todo:Todo;
  todos:Todo[];
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo:React.FC<Props> = ({todo,todos,setTodos}) => {
  function handleDone(id:number){
    setTodos(todos.map((todo)=>todo.id===id?{...todo,isDone:!todo.isDone}:todo))
  }
  function handleDelete(id:number){
    setTodos(todos.filter((todo)=>todo.id!==id));
  }
  return (
    <form className='single-todo'>
      { //strikethrough tag
        (todo.isDone)?(<s className="work">{todo.todo}</s>):(<span className="work">{todo.todo}</span>)
      }
      <div>
      <span className="icon" onClick={()=>handleDelete(todo.id)}>
      <MdDelete />
      </span>
      <span className="icon" onClick={()=>handleDone(todo.id)}>
      <MdDoneOutline />
      </span>
      </div>
    </form>
  )
}

export default SingleTodo
