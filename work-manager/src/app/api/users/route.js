import { NextResponse } from "next/server"
import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import bcrypt from "bcryptjs"

connectDb();


export async function GET(req) {

    let users = [];
    try {
        users = await User.find();
        return NextResponse.json(users);
    } catch (error) {

        console.log(error);
        return NextResponse.json({
            message: "failed to get users",
            success: false,
        });
    }
}

//when we are keeping token in cookie it automatically comes in the cookie in header when client makes a request to server but if token is saved to local storage of browser instead of cookie then we have to insert it to the header then send the request to the browser

export async function POST
(req) {

    

    const { name, email, password, about, profileURL } = await req.json();

    try {
        let user = new User({
            name, email, password, about, profileURL
        });

        user.password = bcrypt.hashSync(user.password, 10);



        const createdUser = await user.save();
       
        console.log("createdUser ", user);

        const response =  NextResponse.json(createdUser, {
            status: 201,
        });
        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "failed to create user",
            success: false,
        },
            {
                status: 500, // if i dont set status then even on error it will show toast pop up registered successfully but actually it wont register
            });
    }


}