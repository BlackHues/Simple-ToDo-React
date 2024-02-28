import './CSS/Todoitems.css'
import tick from './Assets/tick.png'
import untick from './Assets/untick.png'
import cross from './Assets/cross.png'

const Todoitems = ({no,display,text,setTodos}) => {
  
  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todos")); // Retrieve todos from local storage
  
    // Filter out the todo item with the specified 'no' (unique ID) from the 'data' array
    data = data.filter((todo) => todo.no !== no);
  
    setTodos(data); // Update the 'todos' state with the modified 'data' array (excluding the deleted todo)
  };
  
  const toggle = () => {
    let data = JSON.parse(localStorage.getItem("todos")); // Retrieve todos from local storage
  
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) { // Check if the 'no' (unique ID) matches the targeted todo item
        if (data[i].display === "") {
          data[i].display = "line-through"; // If the current display style is empty, set it to 'line-through'
        } else {
          data[i].display = ""; // Otherwise, if it's already 'line-through', reset it to an empty string
        }
        break; // Break the loop since the targeted item has been found and updated
      }
    }
  
    setTodos(data); // Update the 'todos' state with the modified 'data' array (with display style toggled)
  };
  


  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
        {display===""?<img src={untick} alt="" />: <img id="tick" src={tick} alt="" />}
      <div className="todoitems-text">{text}</div>
      </div>
      <img className='todoitems-cross-icon' onClick={()=>(deleteTodo(no))} id="cross" src={cross} alt="" />
    </div>
  )
}
export default Todoitems
