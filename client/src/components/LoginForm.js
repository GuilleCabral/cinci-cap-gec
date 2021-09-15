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

}

    return (
        <div className={ `${!isShowLogin ? "active" : ""} show`} >
        <div className="login-form">
        <div className="form-box solid">
        <form action="/" method="POST" onSubmit={onSubmit}>
            <h1 className="login-text"> Sign In</h1>
            <br />
            <label>Username</label>
            <input type="text"
            name="username"
            className="login-box"
            onChange={onChangeName}
            />
            <br />
            <label>Password</label>
            <input 
            type="password"
            name="password"
            className="login-box"
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

