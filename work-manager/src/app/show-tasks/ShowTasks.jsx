
"use client";
import Task from "./Task";
import UserContext from "@/context/UserContext";
import { deleteTask, getTusksOfUser }  from "@/services/taskService";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const ShowTasks = () => { 
  const [tasks, setTasks] = useState([]);
  const context = useContext(UserContext);

  async function loadTasks(userId) { 

    try {

      const tasks = await getTusksOfUser(userId);

      setTasks([...tasks].reverse());

      console.log(tasks);
      
    }catch(error) { 
      
      console.log("this is error:",error);


    }
  }


  useEffect(() => { 

    if (context.user) { 

      loadTasks(context.user._id);
    }
    
   
  }, [context.user])
  
   async function deleteTaskParent(taskId) { 

     try {
      
       const result = await deleteTask(taskId);
       console.log(result);

       const newTasks = tasks.filter((item) => item._id !== taskId);

       setTasks(newTasks);
       toast.info("your task is being deleted", {
         position:"top-center"
       })

    } catch (error) { 

      console.log(error);
      toast.error("Error in deleting tasks :(");
    }


  }

  return (
    <div className="grid grid-cols-12 mt-3">
      <div  className="col-span-6 col-start-4">
        <h1 className="text-3xl text-center ">Your Tasks {`(${tasks.length})`}</h1>
        {tasks.map((task) => (
          <Task task={task} key={task._id } deleteTaskParent={deleteTaskParent}  />
        ))}

      </div>
    </div>
  )
}



export default ShowTasks