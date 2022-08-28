import { Avatar } from '@mui/material'
import React from 'react'
import './Chat.css'
import firebase from 'firebase'
import StopIcon from '@mui/icons-material/Stop';
import ReactTimeago from 'react-timeago';
import {useDispatch} from 'react-redux'
import { selectImage, selectSelectedImage } from './features/appSlice';
import {db,storage} from './backend';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function Chat({id,profilePic,imageUrl,read,timestamp,username}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const open = () =>{
        dispatch(selectImage(imageUrl))
         history.push('/chats/view')
        
    }
    return (
        <div onClick={open} className="chat">
            <Avatar className="chat__avatar" src={profilePic} />
            <div className="chat__info">
                <h4>{username}</h4>
                <p>Posted - {new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
            {!read && <StopIcon className="chat__read"/>}
        </div>
    )
}

export default Chat
