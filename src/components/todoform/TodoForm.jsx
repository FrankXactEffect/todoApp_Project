import React, { useState } from 'react'
import './todoform.css'

import { toast } from 'react-hot-toast';
import axios from 'axios';


function TodoForm({ addTodo }) {
    const [content, setContent] = useState("");

    const createTodo = async () => {
        try {
            const token = window.localStorage.getItem("token")

            const formData = {
                content: content,
            }

            const res = await axios.post("https://todo-api-bvr7.onrender.com/todo/create", formData, {
                headers: { "Authorization": `Bearer ${token}` }
            },)
            console.log(res);
            addTodo(content);
        } catch (error) {
            console.log(error)
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo();
    }
    // async function handleSubmit(e) {
    //     e.preventDefault();



    //     try {
    //         const token = window.localStorage.getItem("token")
    //         console.log("Token: ", token)
    //         const response = await axios.post("https://todo-api-bvr7.onrender.com/todo/create", {
    //             headers: { "Authorization": `Bearer ${token}` }
    //         },
    //             {
    //                 content: content,

    //             })
    //         addTodo(content);
    //         setContent("")
    //         console.log(response)
    //         toast.success('this users');

    //     } catch {

    //         console.log(e)
    //         toast.error('failed, check your details')
    //     }


    // }



    // if (content) {
    //     addTodo(content);
    //     setValue("")
    //     toast.success('Todo Added Successly!');

    // } else {
    //     toast.error('Enter Todo First');
    // }



    return (

        <div className='white-wrapper'>
            <form className='Todoform' onSubmit={handleSubmit}>
                <input type="text" name='todo' className='todo-input'
                    value={content} placeholder='What is the task today ?' onChange={(e) => setContent(e.target.value)} />
                <button type='submit' className='todo-btn'>Add</button>
            </form>
        </div>



    )


}
export default TodoForm;
