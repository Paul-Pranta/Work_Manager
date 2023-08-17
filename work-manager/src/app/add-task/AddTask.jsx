
"use client"

import React, { useState } from "react";
import Image from "next/image";
import loginsvg from "@/assets/login.svg"
import { addTask } from "@/services/taskService";
import { ToastContainer, toast } from 'react-toastify';
export const metadata = {

    title: "Add Task : Work Manager",
};

const AddTask = () => {
    // document.title = metadata.title;
    // this is done when this page is named as page.js and it was totally client side component and as metadata is a server side thing so we would have to use document.title and get the value from metadata.title which is passed to client
    
    const [task, setTask] = useState({
        title: "",
        content: "",
        status: "none",
        userId: "64ce80b72f74a9b9936dae50",
    });

    const handleAddTask = async (event) => {

        event.preventDefault();
        console.log(task);

        try {
            const result = await addTask(task);
            console.log(result);
            toast.success("Your Task is being added :) ", {
                position: "top-center",

            })
            setTask({
                title: "",
                content: "",
                status:"none",
            });
        } catch (e) {

            console.log(e);
            toast.error("failed to add task :(", {
                position: "top-center",
            });

        }

    }

    return (
        <div className="grid grid-cols-12 justify-center mt-4">

            <div className=" p-5 col-span-6 col-start-4 shadow-sm ">
                <div className="my-8 flex justify-center">
                    <Image src={loginsvg} style={{ width: "50%" }} alt="loading..." />
                </div>
                <h1 className="text-3xl text-center">Add your task here</h1>

                <form action="#" onSubmit={handleAddTask}>
                    <div className="mt-4">
                        <label htmlFor="task_title" className="block text-sm font-medium mb-2"> Title: </label>

                        <input type="text"
                            id="task_title" name="task_title"
                            onChange={(event) => {
                                setTask({
                                    ...task,
                                    title: event.target.value
                                })
                            }}
                            value={task.title}
                            className="w-full p-2 rounded-full bg-gray-800 focus:ring-violet-800 border border-gray-800 shadow-md shadow-violet-400" />

                    </div>

                    <div className="mt-4">
                        <label htmlFor="task_content" className="block text-sm font-medium mb-2">Content:</label>

                        <textarea type="text" id="task_content"
                            name="task_content"
                            onChange={(event) => {
                                setTask({
                                    ...task,
                                    content: event.target.value
                                })
                            }}
                            value={task.content} className="w-full p-2 rounded-3xl bg-gray-800 focus:ring-violet-800 border border-gray-800 shadow-md shadow-violet-400" rows={5} />

                    </div>

                    <div className="mt-4">

                        <label htmlFor="task_status" className="block text-sm font-medium mb-2">Status:</label>
                        <select id="task_status"
                            name="task_status"
                            onChange={(event) => {
                                setTask({
                                    ...task,
                                    status: event.target.value
                                })
                            }}
                            value={task.status} className="w-full p-2 rounded-full bg-gray-800 focus:ring-violet-800 border border-gray-800 shadow-md shadow-violet-400">

                            <option value="none" disabled>------Select Status------</option>
                            <option value="pending"> Pending</option>
                            <option value="completed">Completed</option>
                            <option value="untouched">Untouched</option>

                        </select>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <button className="bg-violet-600 py-2 px-3 rounded-lg hover:bg-violet-900 ">Add Task</button>
                        <button className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-900 ml-3 ">Delete Task</button>
                    </div>
                </form>
            </div>


        </div>


    )

};

export default AddTask;
