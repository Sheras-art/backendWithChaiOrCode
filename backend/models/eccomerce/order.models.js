import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
        quantiy: {
            type: Number,
            required: true
        }

    })

const orderSchema = new mongoose.Schema(
    {
        orderPrice: {
            type: Number,
            required: true,
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        orderItems: {
            type: [orderItemSchema]
        },
        address: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ['Pending', 'Cancled', 'Delivered'], // we use enum (full form enumration) to give options which are excepted in this field otherwise we will not except any option.
            default: 'Pending'
        }
    }, {timestamps: true})

export const Order = mongoose.model('Order', orderSchema)