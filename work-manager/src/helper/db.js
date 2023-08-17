
import { User } from "@/models/user";

import mongoose from "mongoose";
export const connectDb = async () => {

    try {

        const { connection
        } = await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "work_manager"
        });
        console.log("db connected...");

        console.log("connected with host ", connection.host);
    } catch (error) {
        console.log("failed to connect to db");
        console.log(error);
    }


};