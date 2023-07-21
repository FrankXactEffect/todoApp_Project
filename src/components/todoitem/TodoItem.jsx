import { format } from 'date-fns'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './todoItem.css'
import { useEffect, useState } from 'react'
import axios from "axios"

//add props
function TodoItem({ task, item, toggleComplete, deleteTodo, editTodo }) {
    const [status, setStatus] = useState("Pending")


    const toggleText = () => {
        setStatus((state) => (state === "Completed" ? "Pending" : "Completed"));
        toggleComplete(task.id);
    };

    const date = new Date(task.updatedAt).toUTCString()
    console.log("Franks single: ", task.updatedAt)
    // const useTime = JSON.strinify(new Date(item.time)).split("T")[1]
    // const dateTime = date + " " + useTime
    return (
        <div>

            <div className='ItemsList'>

                <div className='todo-time-date'>
                    <p id='one' className={`${task.completed ? 'completed' : ''}`}>{task?.content}</p>
                    <p id='two'>
                        {date}
                    </p>
                </div>
                <div role='button' tabIndex={0} className='status-div' onClick={toggleText}>{status}</div>
                <div className='todoActions'>
                    <EditIcon id='editIcon' role='button' tabIndex={0} onClick={() => editTodo(task.id)} />
                    <DeleteIcon id='deleteIcon' role='button' tabIndex={0} onClick={() => deleteTodo(task.id)} />
                </div>
            </div>

        </div>





    );
}

export default TodoItem