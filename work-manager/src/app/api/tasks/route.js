import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

//getiing logged in userid



export async function GET(req) { 

    try {

        const tasks = await Task.find();
        return NextResponse.json(tasks);

    } catch (error) { 
        console.log(error);
        return getResponseMessage("failed to get data", 404, false);
    }

}


export async function POST(req) {


    const { title, content, userId,status } = await req.json();

    const secretKey = 'MY_SECRET_KEY';

    const authToken = req.cookies.get("authToken")?.value;

    const data = jwt.verify(authToken, secretKey);

    
    try {
        const task = new Task({
            title, content, userId:data._id,status
        });
        const createdTask = await task.save();
        return NextResponse.json(createdTask, {
            status: 201,
        });
    } catch (error) { 
        console.log(error);
        return getResponseMessage("failed to create task", 500, false);
    } 
}