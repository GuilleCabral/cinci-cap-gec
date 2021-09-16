import React, {useState, useEffect} from 'react';
import BACKEND_URL from "../config";
import axios from 'axios';

const LoginForm = ({ isShowLogin }) => {
console.log(BACKEND_URL);
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const onChangeName = (e) => {
    setUsername(e.target.value);
}
const onChangePass = (e) => {
    setPassword(e.target.value);
}

const onSubmit = (e) => {
    e.preventDefault();

    const newLogin = {
        username: username,
        password: password
    }

   axios.post(BACKEND_URL +' /signup/add', newLogin)
   .then(res => console.log(res.data))
   .catch(err => console.log(err));

   let toggler = document.getElementById("loginForm");

   let formText = document.getElementsByClassName("login-text");
   formText[0].innerHTML = "SUCCESS!";

    setTimeout(() => {
      if (!toggler.classList.contains("active")) {
        toggler.classList.add("active");
      }
      setUsername("");
      setPassword("");
      
    }, 1000);


}

const togglePopUp = (e) => {
    let toggler =  document.getElementById('loginForm');

    if(e.target.classList.contains("login-form")){
        toggler.classList.add("active");
    }
}

useEffect(() => {
    if(!document.getElementById('loginForm').classList.contains("active")){
        document.addEventListener('click', togglePopUp);
    }
    let loginText = document.getElementsByClassName("login-text");

    loginText[0].innerHTML = "SIGN IN";

}, [isShowLogin]);

    return (
        <div id="loginForm" className={ `${!isShowLogin ? "active" : ""} show`} >
        <div className="login-form">
        <div className="form-box solid">
        <form action="/" method="POST" onSubmit={onSubmit}>
            <h1 className="login-text"> Sign In</h1>
            <br />
            <label>Username</label>
            <input type="text"
            name="username"
            className="login-box"
            value={username}
            onChange={onChangeName}
            />
            <br />
            <label>Password</label>
            <input 
            type="password"
            name="password"
            className="login-box"
            value={password}
            onChange={onChangePass}
             /> <br /><br />
             <input type="submit" value="Login" className="login-btn" />
             <input type="submit" value="Create Account" className="login-btn" />
             </form>
             </div>
              </div>
             </div>
    );
}

export default LoginForm;