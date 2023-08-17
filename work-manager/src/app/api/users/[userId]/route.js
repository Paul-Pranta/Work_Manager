import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/user";
import { connectDb } from "@/helper/db";



export async function GET(req, { params }) {
    
    const { userId } = params;
    const user = await User.findById(userId).select("-password");
    return NextResponse.json(user);

}


export async function DELETE(req, { params}) { 

    const { userId } = params;

    try {

        await User.deleteOne({ _id: userId });
        return NextResponse.json({
            message: "user deleted",
            success:true,
        });
    } catch (error) { 
        return NextResponse.json({
            message: "failed to delete user",
            success:false,
        })  
    } 
}


export async function PUT(req, { params }) { 
    const { userId } = params;
    const { name, email, password, about, profileURL } = await req.json();
    try {
        const user = await User.findById(userId).select("-password");
        user.name = name;
        user.about = about;
        user.password = password;
        user.profileURL = profileURL;

        const updatedUser = await user.save();
        return NextResponse.json(updatedUser);

    } catch (error) { 
        return NextResponse.json({
            message: "failed to update user",
            success: false,
        })

    }
}