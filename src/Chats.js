import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Chats.css'
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import {auth, db} from './backend'
import Chat from './Chat';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import { selectUser } from './features/appSlice';
function Chats() {
    const [posts,setPosts] = useState([]);
    const history = useHistory();
    const user = useSelector(selectUser)
   

    useEffect(() =>{
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot =>{
            setPosts(snapshot.docs.map(doc => ({
                id:doc.id,
                data:doc.data()
            })))
        })},[])
    return (
        <div className="chats">
            <div className="chats__header">
                <Avatar src={user.profilePic} onClick={() => auth.signOut()} className="chats__avatar" />
                <div className="chats__search">
                    <SearchIcon />  
                    <input placeholder="Friends" type="text" />       
                </div>
                <ChatBubbleIcon className="chats__chatIcon" />
            </div>
            <div className="chat__posts">
                {posts.map(({id,data:{profilePic,imageUrl,read,timestamp,username}}) =>(
                    <Chat key={id}
                    profilePic = {profilePic}
                    imageUrl = {imageUrl}
                    read = {read}
                    timestamp = {timestamp}
                    username = {username}
                     />
                ))}
            </div>
            <RadioButtonUncheckedIcon onClick={() => history.replace('/')} className="circle" fontSize="large"/>
            
        </div>
    )
}

export default Chats
