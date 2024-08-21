import React from 'react'
import './Style.css';

interface Props{
  todo:string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e: React.FormEvent<EventTarget>)=>void;
}
const InputField: React.FC<Props> = ({todo,setTodo,handleAdd}) => {
  return (
    <div>
      <form onSubmit={handleAdd}>
        <div>
        <input type='text' placeholder='Enter a task' className='task-taker' 
        onChange={(e)=>setTodo(e.target.value)} value={todo}/>
        <button className='go-btn'>Go</button>
        </div>
      </form>
    </div>
  )
}

export default InputField
