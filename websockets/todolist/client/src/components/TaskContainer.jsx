import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TaskContainer = () => {
    const [tasks, setTasks] = useState({});

    useEffect(() => {
        function fetchTasks() {
            fetch("http://localhost:5050/api")
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setTasks(data);
                });
        }
        fetchTasks();
    }, []);

    return (
        <div className='container'>
            {/* 
            👇🏻 Returns an array of each tasks (Uncomment to view the data structure)

             {Object.entries(tasks).map((task) => console.log(task))} */}

            {Object.entries(tasks).map((task) => (
                <div
                    className={`${task[1].title.toLowerCase()}__wrapper`}
                    key={task[1].title}
                >
                    <h3>{task[1].title} Tasks</h3>
                    <div className={`${task[1].title.toLowerCase()}__container`}>
                        {task[1].items.map((item, index) => (
                            <div
                                className={`${task[1].title.toLowerCase()}__items`}
                                key={item.id}
                            >
                                <p>{item.title}</p>
                                <p className='comment'>
                                    <Link to='/comments'>
                                        {item.comments.length > 0 ? `View Comments` : "Add Comment"}
                                    </Link>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskContainer;


// import React from "react";
// import {Link} from "react-router-dom"

// const TaskContainer = (socket)=>{

    
//     return(
//         <>
//             <div className="container">
//                 <div className="pending_wrapper">
//                     <h3>Pending Task</h3>
//                     <div className="pending_container">
//                         <div className="pending_items">
//                             <p className="comments">
//                                 <Link to='/comments' >2 comments</Link>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="ongoing_wrapper">
//                 <h3>Ongoing Task</h3>
//                 <div className="ongoing_container">
//                     <div className="ongoing_item">
//                         <p className="comments">
//                         <link to='/comments' >add comments</link>
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             <div className="completed_wrapper">
//                 <h3>Completed Task</h3>
//                 <div className="completed_container">
//                     <div className="completed_item">
//                         <p className="comments">
//                         <link to='/comments' >2 comments</link>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default TaskContainer;