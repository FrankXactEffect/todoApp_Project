import React from 'react'
import './todoList.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// import { MaximizeSharp } from '@mui/icons-material';
function TodoList(props) {
    const { completeTodo, deleteTodo } = props
    let todoArr = props.todoArr.length > 0
        ? props.todoArr : JSON.parse(localStorage.getItem('todos'))
    return (
        <div className="todo-list-container">

            <div className='todo-caption'>Todo List</div>
            <div className='columns-titles'>
                <div id='one-col'>List</div>
                <div id='two-col'>Status</div>
                <div id='two-col'>Edit</div>
                <div id='two-col'>Delete</div>
            </div>
            <div className='todo-list'>
                <ul>
                    {/* traversing the todo array */}
                    {todoArr && todoArr.length > 0 ?
                        todoArr.map((el, i) => (

                            <li key={i} className='todo-list-item'>

                                <div id='list-content' className={el["done"] ? "line-through" : null}>{el.title}</div>

                                <div id='list-action' title='Complete' className={`pointer ${el["done"] ? "green" : "blue"}`} onClick={() => completeTodo(i)}>completed</div>
                                <EditIcon id='list-action' title="Complete" className='editIcon' />
                                <DeleteIcon id='list-action' className='deleteIcon' title="Delete" onClick={() => { deleteTodo(i) }} />

                            </li>

                        )) : null
                    }

                </ul>
            </div>
        </div>

    )
}

export default TodoList