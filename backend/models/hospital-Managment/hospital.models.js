import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            requird: true
        },
        address: {
            type: String,
            requird: true
        },
        city: {
            type: String,
            requird: true
        },
        pincode: {
            type: String,
            requird: true
        },
        specialization: [
            {
                type: String
            }
        ]
    }, {timestamps: true})

export const Hospital = mongoose.model("Hospital", hospitalSchema)