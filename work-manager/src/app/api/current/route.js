import { NextResponse } from "next/server";
import  jwt  from "jsonwebtoken";
import { User } from "@/models/user";

export async function GET(req) {

    const secretKey = 'MY_SECRET_KEY';

    const authToken = req.cookies.get("authToken")?.value;

    console.log(authToken);

    const data = jwt.verify(authToken, secretKey);
    console.log(data);
    const user = await User.findById(data._id).select("-password");

    console.log(user);

    
    //previously i was writing return NextResponse.json({user}); that time when i used to login first it had the user data but when i refresh the page the user data used to become udefined
    return NextResponse.json(user);
}