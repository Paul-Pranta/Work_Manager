

import UserContext from "@/context/UserContext";

import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";


const Task = ({ task, deleteTaskParent }) => {
    

    const { user } = useContext(UserContext);

    function deleteTask(taskId) { 


        deleteTaskParent(taskId);// this function will run from ShowTasks.jsx we need to delete this in such way coz Task.jsx dont have access to tasks array
        


    }

    return (
        <div className={` shadow-lg mt-2 rounded-md ${task.status == "completed" ? "bg-green-800" : "bg-gray-800"}`}
        >
            <div className="p-4">
                
                <div className="flex justify-between">

                    <h1 className="text-2xl font-semibold">{task.title}</h1>
                    
                    <span onClick={()=>deleteTask(task._id)} className="shadow-lg bg-gray-700 hover:bg-slate-900 rounded-full w-6 h-6 flex justify-center items-center cursor-pointer ">

                    <RxCross1/>

                    </span>
                    
                    
                </div>
                

                <p className="font-normal">{task.content}</p>

                <div className="flex justify-between mt-3">

                    <p className="text-left">
                        Status: <span className="font-bold">{task.status.toUpperCase()}</span>

                    </p>
                    <p className="text-right">
                        Author: <span className="font-bold">{user?.name}</span>
                    </p>

                </div>
            </div>
        </div>
    )


}

export default Task;