

"use client"

import { login } from "@/services/userService";
import React, { useContext } from "react"
import { useState } from "react"
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import UserContext from "@/context/UserContext";

const Login = () => {

    const router = useRouter();
    const context = useContext(UserContext);
    const [loginData, setLoginData] = useState({
        email: "",
        password:"",
    });

    const loginFormSubmitted = async (event) => { 
        event.preventDefault();
        console.log("from login page ", loginData);
        if (loginData.email === "" || loginData.password === "") { 
            toast.info("Both email and password are required", {
                position: "top-center",
            })
        }

        try {

            const result = await login(loginData);
            console.log(result);

            toast.success("Logged In Successfully 🥰");
            context.setUser(result.user); 
            router.push("/");




        } catch (error) { 

            console.log(error);
            toast.error(error.response.data.message, {
                position:"top-center"
            })
        }




    }


    return (
        <div className="grid grid-cols-12">
            <div className=" col-span-4 col-start-5 ">
                <div className="py-5">
                    <h1 className="text-3xl text-center">Login Here</h1>
                    <form action="#" onSubmit={loginFormSubmitted}>
                        <div className="mt-3">
                            <label htmlFor="user_email" className="block text-sm font-medium mb-2 ps-2">
                                Email:
                            </label>
                            <input type="email" id="user_email"
                                 name="user_email"
                                 onChange={(event) => {
                                     setLoginData({
                                        ...loginData,
                                         email: event.target.value
                                     })
                                 }}
                                 value={loginData.email} placeholder="Enter your email"
                                className="w-full p-2 rounded-full bg-gray-800 focus:ring-violet-800 border border-gray-800 shadow-md shadow-violet-400" />
                        </div>

                        <div className="mt-3">
                            <label htmlFor="user_password" className="block text-sm font-medium mb-2 ps-2">
                                Password:
                            </label>
                            <input type="password" id="user_password"
                                 name="user_password"
                                 onChange={(event) => {
                                     setLoginData({
                                         ...loginData,
                                         password: event.target.value
                                     })
                                 }}
                                 value={loginData.password} placeholder="Enter your password"
                                className="w-full p-2 rounded-full bg-gray-800 focus:ring-violet-800 border border-gray-800 shadow-md shadow-violet-400" />
                        </div>

                        <div className="mt-4 flex justify-center">
                            <button type="submit" className="bg-green-600 py-2 px-3 rounded-lg hover:bg-green-900 ">Login</button>
                        </div>
                        {/* { JSON.stringify(loginData)} */}
                    </form>

                </div>
            </div>
        </div>

    )
}

export default Login