import { format } from 'date-fns'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './todoItem.css'
import { useEffect, useState } from 'react'
import axios from "axios"

//add props
function TodoItem({ tasks, item, task, toggleComplete, deleteTodo, editTodo }) {
    console.log(tasks, "yeap");
    const [status, setStatus] = useState("Pending")


    const toggleText = () => {
        setStatus((state) => (state === "Completed" ? "Pending" : "Completed"));
        toggleComplete(task.id);
    };


    return (
        <div>

            <div className='ItemsList'>

                <div className='todo-time-date'>
                    <p>{item}</p>
                    <p id='one' className={`${task.completed ? 'completed' : ''}`}>{item?.content}</p>
                    <p id='two'>
                        {format(new Date(item.createdAt), 'p, MM/dd/yyyy')}
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