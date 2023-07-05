import React, { useState } from 'react'
import './fieldbuttonbar.css'
import TodoList from '../todoList/TodoList'
// import swal from "sweetalert"

function FieldButtonbar() {
    //default value of the todo
    const [todo, setTodo] = useState({ title: "", done: false });
    const [todoArr, setTodoArr] = useState([]);

    //if it has object ? then the object is parsed and gotten
    let todos = localStorage.hasOwnProperty("todos")
        ? JSON.parse(localStorage.getItem("todos"))
        : []

    const onChange = (event) => {
        //destructuring the value from the object
        let { value } = event.target
        let obj = {}
        obj["title"] = value
        obj["done"] = false
        setTodo(obj)
    }

    // creating the function that will trigger the event on the button
    const createTodo = (event) => {
        //get the property
        const { name } = event.target
        if (event.key === "Enter" || name === "addTodo") {
            if (todo.title !== "") {
                //push or add from the top
                todos.unshift(todo)
                localStorage.setItem('todos', JSON.stringify(todos))
                //clear input field
                setTodo({ title: "", done: false })
            } else {
                alert("Oop!,Please write todo first❌")
            }
        }
    }

    const completeTodo = (i) => {
        if (todos[i]["done"] !== true) {
            todos[i]["done"] = true
            localStorage.setItem("todos", JSON.stringify(todos))
            setTodoArr(todos)
            alert("Todo Completed!✅");
        }
    }

    const deleteTodo = (i) => {

        todos.splice(i, 1)
        localStorage.setItem('todos', JSON.stringify(todos))
        setTodoArr(todos)


    }
    // const editTodo = (i) =>{
    //     const findTodo = todos.find((todo) => todo.id === id);
    //     localStorage.setItem('todos', JSON.stringify(todos))
    //     setTodoArr(findTodo)
    // }
    return (
        <>
            <div className='field-button-container'>
                <div className='text-field'><input type="text" name="todo" placeholder='What would you like to do ?'
                    value={todo.title} onKeyPress={createTodo} onChange={onChange} /></div>
                <div className='btn-addTodo'>< button type='button' name='addTodo' onClick={createTodo}>Add</button></div>
            </div>

            {/* passing props */}
            <TodoList todoArr={todoArr}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo} />
        </>
    )
}

export default FieldButtonbar