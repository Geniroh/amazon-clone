import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [infomsg, setInfomsg] = useState('')
    const Navigate = useNavigate();

    const signIn = (e)=>{
        e.preventDefault();

        signInWithEmailAndPassword(auth,email,password)
            .then((credential)=>{
                console.log('User created', credential)
                setInfomsg('User Logged in successfully')
                Navigate('/')
            })
            .catch((err)=>{
                console.log(err.message)
            })

    }

    const register = (e)=> {
        e.preventDefault();

        createUserWithEmailAndPassword(auth,email,password)
        .then((credential)=>{
            console.log('User created', credential)
            setInfomsg('User created Succefully')
            Navigate('/')
        })
        .catch((err)=>{
            setInfomsg(err.message)
            console.log(err.message)
        })
    }
    
  return(
      <div className="login">
        <Link to='/'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="" className="login__logo" />
        </Link>

        <div className="login__container">
            <h1>Sign in</h1>
            <form action="">
                <h5>E-mail</h5>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>

                <h5>Password</h5>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required />

                <button type="submit" onClick={signIn} className="login__signInButton">Sign in</button>
            </form>

            <p>
                By Signing-in you agree to this clone conditions and use.
            </p>

            <button onClick={register} className="login__registerButton">Create an account</button>
        </div>
      </div>
  )
};

export default Login;
