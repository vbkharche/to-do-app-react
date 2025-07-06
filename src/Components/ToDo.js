import React, {useState} from "react";
const ToDo = () =>{
    const [task, setTask] = useState('');
    const [todo, setTodo] = useState([]);
    const addTodoList=(e)=>{
        if (task.trim() === '') return;
        setTodo([...todo, task]);
        setTask('');
    }
    return(
        <>
            <div>ToDo APP</div>
            <input id="todo" name='todo_item' value ={task} onChange={(e)=> setTask(e.target.value)} />
            <button type="sumit" onClick={addTodoList}>Submit</button>
            <ul>
                {todo.map((item)=> <li>{item}</li>)}
            </ul>
        </>
    )
}
export default ToDo;