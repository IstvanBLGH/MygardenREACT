import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import img1 from './pictures/logo.jpg'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/")
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src={img1} 
                    alt="logo"
                />
            </Link>

            <div className='login__container'>
                <h1>Intra in cont
                </h1>

                <form className='form'>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Parola</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'><p>Intra in cont</p></button>
                </form>
                <div className='contCreator__text'>
                <p >Daca nu ai cont, creeaza</p>
                </div>
                <button onClick={register} className='login__registerButton'><p>Creeaza cont</p></button>
            </div>
        </div>
    )
}

export default Login
