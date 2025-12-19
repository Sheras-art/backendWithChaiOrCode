import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        requied: true
    },
    salary: {
        type: String,
        requied: true
    },
    qualification: {
        type: String,
        requied: true
    },
    experienceInYears: {
        type: String,
        requied: true,
        default: 0
    },
}, {timestamps: true})

export const Doctor = mongoose.model("Doctor", doctorSchema)