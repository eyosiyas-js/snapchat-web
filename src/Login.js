import React from 'react'
import './Login.css'
import {auth,provider} from './backend'
import { useDispatch } from 'react-redux'
import { login } from './features/appSlice'
import { Button } from '@mui/material'
function Login() {
    const dispatch = useDispatch()
    const log = () =>{
        auth.signInWithPopup(provider).then((result) =>{
            
            dispatch(login({
                profilePic:result.user.photoURL,
                username:result.user.displayName,
                id:result.user.uid,
            }))
        }).catch(error => alert(error.message))
    }
    return (
      <div className="login">
        <h2>Build by Eyosiyas</h2>
        <div className="logo__w">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvGvK5wtV9qQdStNiQPxvVq44I_fSCdbIzXyXFlQoLpb_zOGUvqm09EaJDST5itykY0k&usqp=CAU"
            alt=""
          />
        </div>
        <div className="login__continers">
          <Button className="login__button" variant="outlined" onClick={log}>
            Sign in
          </Button>
        </div>
      </div>
    );
}
export default Login
