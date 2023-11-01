import React from "react";

const Register = () => {
    return(
        <div className="RegisTemp">
            <center>
            <h1>Home Registration</h1>
            <label><b>First Name:</b></label>&nbsp;<input type="text" placeholder="Type your First Name" /><br/>
            <label><b>Last Name:</b></label>&nbsp;&nbsp;<input type="text" placeholder="Type your Last Name" /><br/><br/>
            <label><b>Email-id:</b></label>&nbsp;<input type="email" placeholder="Type your Email-id" /><br/>
            <input type="Submit" value="Add"/>&nbsp;&nbsp;
            <input type="Reset" value="Reset"/>

            </center>
        </div>  
    )
}
export default Register;