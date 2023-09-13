import React, { useState } from "react";

const Addtask = ()=>{

    const [task, setTask] = useState("");

    const handleAddTodo = (e)=>{
        e.preventDefault();

        console.log({task});
        setTask("");
    }


    return(
        <>
        <form className="form_input">
                <label htmlFor="task" > Add Todo</label>
                <input 
                    type="text"
                    name="task"
                    id="task"
                    value={task}
                    className="input_task"
                    required
                    onChange={(e)=>{setTask(e.target.value)}}
                 />
                 <button className="addtodoButton">Add Todo</button>
        </form>
        
        </>
    );
};

export default Addtask;