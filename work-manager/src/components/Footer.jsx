
"use client"
import React from "react";

const Footer = () => { 
    
    return (

        <footer className=" mt-44 h-40 bg-violet-600 ">
            <div className="flex p-4 justify-around">
                <div className="text-center flex-col justify-center">
                    <h1 className='text-2xl'>We Welcome You to Work Manager</h1>
                    <p>The best welcome messages are tailored to the user, using seen again</p>
                </div>
                <div className="text-center">
                    <h1 className='text-2xl'>Important Links</h1>

                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">YouTube</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>



                </div>
            </div>


        </footer>
    )


}

export default Footer;