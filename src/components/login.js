import React, { useState } from "react";

const Login = () =>{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleLogin=() =>{
        console.log(email,password)
    }


    return(
        <div className="login">
            <input className="inputbox" type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input className="inputbox" type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value) } />
            <button onClick={handleLogin} className="appbutton" type="button">Login</button>
        </div>
    )
}

export default Login;