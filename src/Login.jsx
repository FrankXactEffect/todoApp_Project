import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'
// import { AiOutlineUser } from 'react-icons/ai';
import { FaEnvelope } from 'react-icons/fa';
import { BiSolidLock } from 'react-icons/bi'
import { BsEyeSlash } from 'react-icons/bs'
import { BsGoogle, BsFacebook, BsTwitter } from 'react-icons/bs'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from "react-router-dom"
function Login() {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const logged = () => {
        history.push("/todoapp");
    }

    async function signIn(e) {
        e.preventDefault()
        //test all state by consoling them
        try {


            //convert three state to object
            let item = { email, password }
            console.warn(item)
            //https://to-do-service-backend-tutorial.onrender.com/users/create
            const response = await axios.post("https://todo-api-bvr7.onrender.com/users/login", {
                email: email,
                password: password,
            })

            window.localStorage.setItem("token", response.data.accessToken)
            //resolve all promises
            console.log(response)
            toast.success('successfully created, you are welcome!');
            setTimeout(logged(), 4000)

        } catch (e) {
            //check wether result is coming or not
            console.log(e)
            toast.error('failed, check your details')

        }

    }




    return (
        <div className='loginContainer'>

            <div className='welcome-note'>
                <p className='paraOne'>Welcome back!</p>
                <p className='paraTwo'>Start making your day faster and better...</p>
            </div>
            <form action="#">
                <div className='inputContainer'>
                    <FaEnvelope className='env-icon' />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='you@gmail.com' />
                </div>

                <div className='inputContainer'>
                    <BiSolidLock className='lock-icon' />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                    <BsEyeSlash className='eye-icon' />
                </div>

                <div className='find-password'>
                    <Link className="find-password-link">
                        <p>forgotten password?</p>
                    </Link>
                </div>

                <div className='button-container-container'>
                    {/* <Link to="todoapp"> */}
                    <button type='sumbit' onClick={signIn}>
                        <p>Sign In</p>
                    </button>
                    {/* </Link> */}
                </div>
                <Toaster toastOptions={{
                    style: {
                        fontSize: '20px',
                        height: '100px'
                    }
                }} />
                <div className='light-lines-con'>
                    <div className='side-left'></div>
                    <p>or</p>
                    <div className='side-right'></div>
                </div>

                <div className='haveAccountLink '>
                    <p>Don't have an  account ? <Link className='use-link' to='/'>Sign Up</Link></p>
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

export default Login