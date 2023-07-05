import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import "./registration.css"
import { AiOutlineUser } from 'react-icons/ai';
import { FaEnvelope } from 'react-icons/fa';
import { BiSolidLock } from 'react-icons/bi'
import { BsEyeSlash } from 'react-icons/bs'
import { BsGoogle, BsFacebook, BsTwitter } from 'react-icons/bs'


function RegistrationPage() {


    //import three state for diffrent input features
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmation, setConfirmation] = useState("")

    async function signUp(e) {
        e.preventDefault()
        //test all state by consolling them

        //convert three state to object
        let item = { name, email, password, confirmation }
        // console.warn(item)

        let result = await fetch("http://todo-api-bvr7.onrender.com/users/create", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        //resolve all promises
        result = await result.json()
        //check wether result is coming or not
        console.warn("result", result)

    }
    return (
        <div className='registrationContainer'>

            <div className='welcome-note'>
                <p className='paraOne'>Welcome!</p>
                <p className='paraTwo'>Make your day faster and better with TODO List</p>
            </div>
            <form>
                <div className='inputContainer'>
                    <AiOutlineUser className='user-icon' />
                    {/* to update state using onChange event function */}
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
                </div>

                <div className='inputContainer'>
                    <FaEnvelope className='env-icon' />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='you@gmail.com' />
                </div>

                <div className='inputContainer'>
                    <BiSolidLock className='lock-icon' />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                    <BsEyeSlash className='eye-icon' />
                </div>

                <div className='inputContainer'>
                    <BiSolidLock className='lock-icon' />
                    <input type="password" value={confirmation} onChange={(e) => setConfirmation(e.target.value)} placeholder='confirm password' />
                    <BsEyeSlash className='eye-icon' />
                </div>

                <div className='button-container-container'>
                    {/* <Link> */}
                    <button onClick={signUp}>
                        <p>Sign Up</p>
                    </button>
                    {/* </Link> */}
                </div>

                <div className='light-lines-con'>
                    <div className='side-left'></div>
                    <p>or</p>
                    <div className='side-right'></div>
                </div>

                <div className='haveAccountLink '>
                    <p>Already have an  account ? <Link className='use-link' to='loginpage'>Sign in</Link></p>
                </div>


                <div className='media-handleContainer'>
                    <Link id="handleIcons"><BsFacebook /></Link>
                    <Link id="handleIcons"><BsGoogle /></Link>
                    <Link id="handleIcons"><BsTwitter /></Link>
                </div>
            </form>
        </div>
    )
}

export default RegistrationPage