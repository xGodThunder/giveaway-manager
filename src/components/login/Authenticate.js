import React, { useEffect} from "react";
import {useDispatch} from "react-redux";
import firebase from "../../configs/firebase";
import "./login.css";
import Button from "@material-ui/core/Button";
import Logo from"../Logo/Logo";


export default function Authenticate(){
  const dispatch = useDispatch();
  dispatch({type:"UPDATE_USER", payload:{name:"sharuma"}});
  function onLogin(e){
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result);
   
    }).catch((error) => {
      console.log(error);
    });
  }
            
  useEffect(()=>{
             
  },[]);
  return(
    <>
      <div className="form">
        <Logo/>
        <form onSubmit={onLogin} >
     
          <Button type="submit" variant="contained" size="large" color="primary">Signin with google</Button>
        </form>
      </div>
    </>
  );
}

