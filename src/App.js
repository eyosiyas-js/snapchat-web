import React, { useEffect } from "react";
import "./App.css";
import CameraSpot from "./CameraSpot";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Preview from "./Preview";
import Chats from "./Chats";
import Chatview from "./Chatview";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/appSlice";
import Login from "./Login";
import {auth,provider} from './backend'
function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if (authUser){
        dispatch(login({
          profilePic:authUser.photoURL,
          username:authUser.displayName,
          id:authUser.uid,
      }))
      } else{
        dispatch(logout())
      }
    })

  },[])
  return (
    // BEM
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ):(
          <div className="app__body">
          <Switch>
          <Route path="/chats/view">
              <Chatview />
            </Route>
          <Route path="/chats">
              <Chats />
            </Route>
          <Route path="/preview">
              <Preview />
            </Route>
            <Route exact path="/">
              <CameraSpot />
            </Route>
          </Switch>
        </div>
        )}
      </Router>
    </div>
  );
}

export default App;
