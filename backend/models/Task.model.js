import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    TaskName: {
        type: String,
        required: true,
        trim: true,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null,
    },
    description: {
        type: String,
        trim: true,
    },
    
    isSellable: {
        type: Boolean,
        default: true,
    },
});

export const Task = mongoose.model("Task", taskSchema);
