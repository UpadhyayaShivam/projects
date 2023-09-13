import React from "react";
import socketIO from "socket.io-client";
import Nav from "./Nav";
import Addtask from "./Addtask";
import TaskContainer from "./TaskContainer";



const Task = ()=>{
    const socketfront  = socketIO.connect("http://localhost:5050/api");
    return(
        <>
        {/* <h1>task</h1> */}
        <Nav/>
        <Addtask socket={socketfront} />
        <TaskContainer socket={socketfront} />
        </>
    )
};

export default Task;