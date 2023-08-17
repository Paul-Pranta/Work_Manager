

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TaskSchema = new Schema({

    title: {
        type: String,
        required: true,
    },

    content: {
        type: String,
        required: true,
    },
    addedDate: {
        type: Date,
        required: true,
        default: Date.now(),
    },

    status: {
        type: String,
        enum: ["pending", "completed", "untouched"],
        default: "pending",
    },

    userId: {
        type: mongoose.ObjectId,
        required: true
    },

});

export const Task = mongoose.models.tasks || mongoose.model("tasks", TaskSchema);