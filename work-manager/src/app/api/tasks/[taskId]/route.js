import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";




export async function GET(req, { params }) { 
    
    const { taskId } = params;
    try {
        const task = await Task.findById(taskId);
        return NextResponse.json(task);
    } catch (error) { 
        return getResponseMessage("failed to get task", 404, false);
    }
}

export async function PUT(req, { params }) { 
    const { taskId } = params;
    try {
        const { title, content, status } = await req.json();
        let task = await Task.findById(taskId);

        task.title = title;
        task.content = content;
        task.status = status;
        const updatedTask = await task.save();
        return NextResponse.json(updatedTask);

    } catch (error) { 

        console.log(error);
        return getResponseMessage("failed to update task", 500, false);
    }
}

export async function DELETE(req, { params }) {
    
    const { taskId } = params;
    try {
        await Task.deleteOne({
            _id: taskId
        })

        return getResponseMessage("Task successfully deleted", 200, true);

    } catch (error) { 
        console.log(error);
        return getResponseMessage("failed to delete task", 500, false);
    }

}