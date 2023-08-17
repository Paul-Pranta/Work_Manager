

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { User } from "@/models/user";
import jwt from "jsonwebtoken";
import { connectDb } from "@/helper/db";

connectDb();

export async function POST(req) {

    const { email, password } = await req.json();

    try {

        const secretKey = 'MY_SECRET_KEY';
        const user = await User.findOne({
            email: email,
        });

        if (user === null) { 
            throw new Error("user not found");
        }

        const matched = bcrypt.compareSync(password, user.password)
        if (!matched) { 
            throw new Error("Password not matched");
        }
        const token = jwt.sign({
            _id: user._id,
            name: user.name,
        }, secretKey);
        
        const response = NextResponse.json({
            message: "Login successfully",
            success: true,
            user: user
        })
        response.cookies.set("authToken", token, {
            expiresIn: "1d",
            httpOnly: true,
        });

        console.log(user);   
        return response;
    } catch (error) {

        return NextResponse.json({
            message: error.message,
            success: false,
        },
        // error.message is a good thing to have while testing with postman

            {
                status: 500

            })
    }

}