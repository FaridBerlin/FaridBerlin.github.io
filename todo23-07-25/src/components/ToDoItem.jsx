import React, {useId} from 'react';
import './ToDoItem.css';

export default function ToDoItem({todo, onToggle, onDelete}) {
   const id = useId();

  return (
    <li className='todo-item'>
      <div className='todo-content'>
         <input id={id} type="checkbox" name="checkbox" checked={todo.completed} onChange={()=>onToggle(todo.id)} />
         <label htmlFor={id} className={`todo-label ${todo.completed ? "completed" : ""}`}>{todo.text}</label>
      </div>
      <button onClick={()=>onDelete(todo.id)}>Löschen</button>
    </li>
  )
}
