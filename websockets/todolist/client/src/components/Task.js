import React from "react";
import socketIO from "socket.io-client";

const socketfront  = socketIO.connect("http://localhost:5050/api");


const Task = ()=>{
    return(
        <>
        <h1>task</h1>
        </>
    )
};

export default Task;