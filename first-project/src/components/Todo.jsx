import { useEffect, useRef, useState } from 'react';
import Todoitems from './Todoitems';
import './CSS/Todo.css';

let count = 0; // Counter for generating unique IDs

const Todo = () => {
  // State to manage the list of todos
  const [todos, setTodos] = useState([]);

  // Reference to the input field
  const inputRef = useRef(null);



  // Function to add a new todo item
  const add = () => {
    // Creating a new todo object and updating the todos state
    setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}]);
    
    // Resetting the input field value and updating local storage
    inputRef.current.value = "";
    localStorage.setItem("todos_count", count);
  };



  // useEffect to load initial todos from local storage on component mount
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos"))); // Retrieve todos from local storage
    count = localStorage.getItem("todos_count"); // Retrieve the count from local storage
  }, []);

  // useEffect to update local storage when todos change
  useEffect(() => {
    
    setTimeout(() => {
      console.log(todos); // Logging updated todos
      localStorage.setItem("todos", JSON.stringify(todos)); // Updating todos in local storage
    }, 100);

  }, [todos]);




  return (
    <div className='todo'>
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input ref={inputRef} type="text" placeholder='Add your task' className='todo-input' />
        <div onClick={add} className="todo-add-btn">ADD</div>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => (<Todoitems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text} />))}
      </div>
    </div>
  );
};

export default Todo;
