import React from 'react';
import {Button} from '@material-ui/core';
import './LoginScreen.css';
import {auth, provider} from '../firebase';
import { actionTypes } from '../reducers/reducer';
import { useStateValue } from '../provider/StateProvider';

function LoginScreen() {    
    const[{},dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => { 
                dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
               });
        })
            .catch((error) => alert(error.message))
    };
 
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://img.icons8.com/officel/100/000000/whatsapp.png" alt=""/>
                <div className="login__text">
                    <h1>Sign in to whatsapp</h1>
                </div>
                <Button onClick={signIn}>
                    Sign In with google
                </Button>
            </div>
        </div>  
    )
}

export default LoginScreen
