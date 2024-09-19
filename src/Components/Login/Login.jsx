import React, { useRef, useState } from 'react'
import './Login.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUsername } from '../../DataSlice'

function Login() {

    const nameref = useRef()
    const passwordref = useRef()
    const [namecheck, setNamecheck] = useState()
    const [passwordcheck, setPasswordcheck] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function namevalidate() {
        console.log(nameref.current.value)
        if (nameref.current.value.length > 5 && nameref.current.value !== isNaN) {
            setNamecheck(true)
        } else {
            setNamecheck(false)
        }
    }
    function passwordvalidate() {
        // console.log(passwordref.current.value)
        if (passwordref.current.value.length > 5) {
            setPasswordcheck(true)
        } else {
            setPasswordcheck(false)
        }
    }
    function submit(event) {
        event.preventDefault();
        // debugger
        if (namecheck && passwordcheck) {
            console.log(nameref.current.value)
            dispatch(setUsername(nameref.current.value))
            navigate('home')
        } else {
            alert('Enter the credentials')
        }
    }

    function reset() {
        setNamecheck('')
        setPasswordcheck('')
    }

    return (
        <form className='login container'>
            <h1 className='heading'> Login </h1>

            <div className='label-input'>
                <label htmlFor="">Name</label>
                <input onChange={namevalidate} ref={nameref} type="text" placeholder='Enter the name' />
            </div>
    
            <div className={`${namecheck ? 'valid' : 'not-valid'} validity-result`}>
                {namecheck ? 'Valid' : 'Not Valid'}
            </div>

            <div className='label-input'>
                <label htmlFor="">Password</label>
                <input onChange={passwordvalidate} ref={passwordref} type="password" placeholder='Enter the password' />
            </div>

            <div className={`${passwordcheck ? 'valid' : 'not-valid'} validity-result`}>
                {passwordcheck ? 'Valid' : "Not Valid"}
            </div>

            <div className='div-button'>
                <button onClick={submit}> Submit </button>
                <button onClick={reset}> Reset </button>
            </div>
        </form>
    )
}

export default Login
