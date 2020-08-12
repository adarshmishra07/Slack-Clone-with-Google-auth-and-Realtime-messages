import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import { auth ,provider} from '../firebase'
import { useStateValue } from '../StateProvider'
import  {actionTypes} from '../reducer'

function Login() {
    const [state,dispatch] = useStateValue()
    const signin=(e)=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type:actionTypes.SET_USER,
                user : result.user
            })
        }).catch(e=>{
            alert(e.message)
        })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.iconscout.com/icon/free/png-512/slack-226533.png" alt=""/>
                <h1>Sign in to Adarsh's Slack Clone</h1>
                <Button onClick={signin} >Login With Google</Button>
            </div>
        </div>
    )
}

export default Login
