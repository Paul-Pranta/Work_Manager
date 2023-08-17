 
"use client"
import React, { useEffect } from "react";
import UserContext from "./UserContext";
import { useState } from "react";
import { toast } from "react-toastify";
import { currentUser } from "@/services/userService";
const UserProvider = ({ children }) => { 
    
    const [user, setUser] = useState(undefined);
    
    useEffect(() => {
        
        async function load() { 

            try {

                const logUser = await currentUser();
                //console.log(logUser);
                 
                setUser({...logUser})
    
            } catch (error) { 
                console.log(error);
                setUser(undefined);
            }
    
        }
        load();

       
    },[])
    
    return (
        <UserContext.Provider value={{user,setUser}}>

            { children}
            
        </UserContext.Provider>
    )


}

export default UserProvider;