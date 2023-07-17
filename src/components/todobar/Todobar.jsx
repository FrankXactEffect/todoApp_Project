import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import './todobar.css'
function Todobar() {
    return (
        <div className='TodobarContainer'>
            <Link to='/' className='logo-link'>
                <div className='todo-title'>
                    <p>TODO APP</p>
                </div>
            </Link>
        </div>
    )
}

export default Todobar