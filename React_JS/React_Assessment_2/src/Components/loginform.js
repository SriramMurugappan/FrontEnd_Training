import React from "react";
import './loginform.css';

const LoginForm = () => {
    return(
        <div className="temp">
            <center>
            <h1>L   O   G   I   N</h1>
            <label><b>Username:</b></label>&nbsp;<input type="text" placeholder="Type your Username" /><br/>
            <label><b>Password:</b></label>&nbsp;&nbsp;<input type="Password" placeholder="Type your Password" /><br/><br/>
            <input type="button" value="Sign in"/>&nbsp;&nbsp;
            <input type="button" value="New Login"/>

            </center>
        </div>  
    )
}
export default LoginForm