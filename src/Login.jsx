import React from 'react'
import './login.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'
// import { AiOutlineUser } from 'react-icons/ai';
import { FaEnvelope } from 'react-icons/fa';
import { BiSolidLock } from 'react-icons/bi'
import { BsEyeSlash } from 'react-icons/bs'
import { BsGoogle, BsFacebook, BsTwitter } from 'react-icons/bs'


function Login() {
    return (
        <div className='loginContainer'>

            <div className='welcome-note'>
                <p className='paraOne'>Welcome back!</p>
                <p className='paraTwo'>Start making your day faster and better...</p>
            </div>
            <form action="#">
                <div className='inputContainer'>
                    <FaEnvelope className='env-icon' />
                    <input type="email" placeholder='you@gmail.com' />
                </div>

                <div className='inputContainer'>
                    <BiSolidLock className='lock-icon' />
                    <input type="password" placeholder='password' />
                    <BsEyeSlash className='eye-icon' />
                </div>

                <div className='find-password'>
                    <Link className="find-password-link">
                        <p>forgotten password?</p>
                    </Link>
                </div>

                <div className='button-container-container'>
                    <Link to="todoapp">
                        <button>
                            <p>Sign In</p>
                        </button>
                    </Link>
                </div>

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