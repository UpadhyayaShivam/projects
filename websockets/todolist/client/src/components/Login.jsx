import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const [username ,setUsername] = useState();
    const navigate = useNavigate();

    const handleLogin = (e)=>{
        e.preventDefault();
        localStorage.setItem("userId",username);
        setUsername("");

        navigate("/tasks");
    }

    return(
        <>
        <div className="login_container">
            <form className="login_form" onSubmit={handleLogin}>
                <label>provide username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    onChange={(e)=> setUsername(e.target.value)} 
                    value={username}
                />
                <button>SIGN IN</button>
            </form>
        </div>
        
        </>
    )
};

export default Login ;