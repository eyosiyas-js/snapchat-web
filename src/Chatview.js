import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import './Chatview.css'
import { selectSelectedImage, selectUser } from './features/appSlice'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Avatar, Button, Input } from '@mui/material'
import Comment from './Comment'
import { db } from './backend'
function Chatview() {
    const selectedImage = useSelector(selectSelectedImage)
    const history = useHistory()
    const user = useSelector(selectUser)
    const [comments,setComments] = useState([])
    const [input,setInput] = useState('')
    useEffect(() =>{
        db.collection('comments').onSnapshot(snapshot =>{
            setComments(snapshot.docs.map(doc => doc.data().text))
        })
    },[])
    useEffect(() =>{
        if (!selectedImage){
            exit()
        }

    },[])
    const exit = () =>{
        history.replace('/chats')
    }
    const Send = (e) =>{
        e.preventDefault()
        db.collection('comments').add({
            text:input
        });
        setComments([...comments,input]);
        setInput('')
    }
    return (
        <div className="chatView">
            <img className="chatView__image"
            src={selectedImage} alt="" />
            <KeyboardBackspaceIcon onClick={exit}className="chatView__back"/>
            <div className="comments">
                <Avatar className="comment__avatar" src={user.profilePic}/>
                <form>
                <Input value={input} onChange={event => setInput(event.target.value)}  placeholder="do some comment" />
                <Button type="submit" disabled={!input} onClick={Send}>Send</Button>
                </form>
                
            </div>
            <div>
            {comments.map(comment =>(
                    <Comment text={comment} />
                ))}
            </div>
           
           
        </div>
    )
}

export default Chatview
