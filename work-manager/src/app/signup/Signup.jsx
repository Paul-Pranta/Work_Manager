
"use client"

import React from "react"
import signupsvg from "@/assets/signup.svg"
import Image from "next/image"
import { useState } from "react"
import { toast } from "react-toastify"
import { signup } from "@/services/userService"

const Signup = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL: "https://w7.pngwing.com/pngs/589/83/png-transparent-account-avatar-contact-people-profile-user-basic-icon.png"
    });

    const doSignup = async (e) => {

        e.preventDefault();
        console.log(data);
        if (data.name.trim() === "" || data.name === null) {
            toast.warning("Name is required :|", {
                position: "top-center",
            });

            return;
        };


        try {

            const result = await signup(data);
            console.log("created",result);
            toast.success("You have been registered :)", {
                position: "top-center"
            });
            setData({
                name: "",
                email: "",
                password: "",
                about: "",
                profileURL: "https://w7.pngwing.com/pngs/589/83/png-transparent-account-avatar-contact-people-profile-user-basic-icon.png"

            })
            



        } catch (error) {
            console.log(error);
            toast.error("failed to sign you up :(", {
                position: "top-center"
            })
        }
    };

    const resetForm = () => {

        setData({
            name: "",
            email: "",
            password: "",
            about: "",
            profileURL: "https://w7.pngwing.com/pngs/589/83/png-transparent-account-avatar-contact-people-profile-user-basic-icon.png"

        })
        toast.success("form is being reset", {
            position: "top-center",
        });


    }




    return (
        <div className="grid grid-cols-12">
            <div className=" col-span-4 col-start-5 ">
                <div className="py-5">
                    <div className="flex justify-center m-5" >
                        <Image src={signupsvg} alt="loading..." style={{
                            width: "50%"
                        }} />
                    </div>
                    <h1 className="text-3xl text-center">Signup Here</h1>
                    <form action="#" className="mt-5" onSubmit={doSignup}>
                        <div className="mt-3">
                            <label htmlFor="user_name" className="block text-sm font-medium mb-2 ps-2">
                                Username:
                            </label>
                            <input type="text" id="user_name"
                                name="user_name"
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        name: event.target.value
                                    })
                                }}
                                value={data.name}
                                placeholder="Enter your name"
                                className="w-full p-2 rounded-full bg-gray-800 focus:ring-violet-800 border border-gray-800 shadow-md shadow-violet-400" />
                        </div>

                        <div className="mt-3">
                            <label htmlFor="user_email" className="block text-sm font-medium mb-2 ps-2">
                                Email:
                            </label>
                            <input type="email" id="user_email"
                                name="user_email"
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        email: event.target.value
                                    })
                                }}
                                value={data.email} placeholder="Enter your email"
                                className="w-full p-2 rounded-full bg-gray-800 focus:ring-violet-800 border border-gray-800 shadow-md shadow-violet-400" />
                        </div>

                        <div className="mt-3">
                            <label htmlFor="user_password" className="block text-sm font-medium mb-2 ps-2">
                                Password:
                            </label>
                            <input type="password" id="user_password"
                                name="user_password"
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        password: event.target.value
                                    })
                                }}
                                value={data.password} placeholder="Enter your password"
                                className="w-full p-2 rounded-full bg-gray-800 focus:ring-violet-800 border border-gray-800 shadow-md shadow-violet-400" />
                        </div>

                        <div className="mt-3">
                            <label htmlFor="user_about" className="block text-sm font-medium mb-2 ps-2">
                                About:
                            </label>
                            <textarea id="user_about"
                                name="user_about"
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        about: event.target.value
                                    })
                                }}
                                value={data.about} placeholder="Enter something about you"
                                className="w-full p-2 rounded-3xl bg-gray-800 focus:ring-violet-800 border border-gray-800 shadow-md shadow-violet-400"
                                rows={5}></textarea>

                        </div>

                        <div className="mt-4 flex justify-center">
                            <button type="submit" className="bg-green-600 py-2 px-3 rounded-lg hover:bg-green-900 ">Signup</button>
                            <button onClick={resetForm}
                            type="button"    className="bg-orange-600 py-2 px-3 rounded-lg hover:bg-orange-900 ml-3 ">Reset</button>
                        </div>
                        {/* { JSON.stringify(data)} */}
                        {/* this helps to see how the data changes while we type in form */}
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Signup;