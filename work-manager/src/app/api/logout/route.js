

import { NextResponse } from "next/server";


export async function POST(req) {

    const response = NextResponse.json({
        message: "Logged out",
        success: true,
    });

    response.cookies.set("authToken", "", {
        expires: new Date(0),
    })

    return response;
 }