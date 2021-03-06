const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema(
    {
        user: {
            username: { type: String },
            userId: { type: Schema.Types.ObjectId, ref: "users" },
            name: { type: String, required: true },
            surname: { type: String, required: true },
            email: { type: String, required: true },
            contactNum: { type: String, required: true },
        },

        orderItems: [
            {
                name: { type: String, required: true, trim: true },
                qty: { type: Number, required: true },
                image: [{ type: String, required: true }],
                size: { type: String, required: true, trim: true },
                color: { type: String, required: true, trim: true },
                colorHex: { type: String, trim: true },
                price: { type: String, required: true },
                discount: { type: String },
                description: { type: String, required: true },
                productId: {
                    type: Schema.Types.ObjectId,
                    required: true,
                    ref: "products",
                },
            },
        ],

        shippingAddress: {
            address1: { type: String, required: true },
            address2: { type: String, required: true },
            city: { type: String, required: true },
            country: { type: String, required: true },
        },

        paymentMethod: {
            type: String,
            required: true,
        },

        currency: {
            type: String,
            required: true,
        },

        paymentResult: {
            id: { type: String },
            status: { type: String },
            update_time: { type: String },
            email_address: { type: String },
            provider: { type: String },
        },

        shippingCost: {
            type: Number,
            required: true,
            default: 0.0,
        },

        tax: {
            type: Number,
            required: true,
            default: 0.0,
        },

        totalPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        itemsPrice: {
            type: Number,
            required: true,
        },

        isPaid: {
            type: Boolean,
            required: true,
            default: false,
        },

        paidAt: {
            type: Date,
        },

        isDelivered: {
            type: Boolean,
            required: true,
            default: false,
        },

        deliveredAt: {
            type: Date,
        },

        deliveryMethod: {
            type: String,
            required: true,
            default: "Standard Delivery",
        },

        creditCardNum: {
            type: String,
        },
        discounted: {
            type: String,
        },
    },
    { timestamps: true }
);

const Order = mongoose.model("orders", orderSchema);
module.exports = { orderSchema, Order };
