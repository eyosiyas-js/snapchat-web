import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import './Comment.css'
import { selectUser } from './features/appSlice'
function Comment({text}) {
    const user = useSelector(selectUser)
    return (
        <div className="com">
            <Avatar src={user.profilePic}/>
            <h5>{user.username}:</h5>
            <ul>{text}</ul>
            
            
        </div>
    )
}

export default Comment
