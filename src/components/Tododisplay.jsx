import React, { useEffect, useState } from 'react'
import Todobar from './todobar/Todobar'
import TodoForm from './todoform/TodoForm'
import { Toaster, toast } from 'react-hot-toast'
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './todoitem/TodoItem';
import { EditTodoForm } from './editTodoForm/EditTodoForm';
import axios from 'axios';

uuidv4();

function Tododisplay() {
    const [todos, setTodos] = useState([]);
    const [tasks, setTasks] = useState([]);

    console.log(tasks, "tasks")

    const fetchTodos = async () => {
        const token = window.localStorage.getItem("token")

        const res = await axios.get("https://todo-api-bvr7.onrender.com/todo/", {
            headers: { "Authorization": `Bearer ${token}` }
        },)
        console.log(res);
        setTasks(res?.data?.todos, "hello");
    }

    useEffect(() => {
        fetchTodos();
    }, [])

    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, time: new Date().toLocaleString(), completed: false, isEditing: false }])

        // if (todos) {
        //     localStorage.getItem("todos", todos)
        //     console.log(todos)
        // }
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
        toast.success('Todo deleted')
    }


    const editTodo = id => {
        //setting the todo
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    }

    const sortedTodoList = [...todos];
    sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));


    return (
        <div>
            <Todobar />
            <TodoForm addTodo={addTodo} />
            <div className='taskListContainer '>

                <div className='todo-caption'><p>Todo List</p></div>
                <div className='list-columns-title'>
                    <p id='list'>List</p>
                    <p id='status'>Status</p>
                    <p id='edit'>Edit</p>
                    <p id='delete'>Delete</p>
                </div>


                {tasks?.map((item) => (

                    <TodoItem task={tasks} item={item?.content} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />

                ))}



            </div>

            <Toaster
                position='top-right-middle'
                toastOptions={{
                    style: {
                        fontSize: '18px',
                    }
                }} />









        </div>
    )
}

export default Tododisplay