import React, { useState } from 'react'
import './editTodoForm.css'

export const EditTodoForm = ({ editTodo, task }) => {

    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id);

        setValue("")
    }

    return (

        <div className='edit-wrapper'>
            <form className='editform' onSubmit={handleSubmit}>
                <input type="text" className='todo-input'
                    value={value} placeholder='Update Task' onChange={(e) => setValue(e.target.value)} />
                <button type='submit' className='todo-btn'>Update Task</button>
                {/* <button value={status} type='button' id='status' onClick={() => change("completed")}>{status}</button> */}
            </form>
        </div>



    )
}