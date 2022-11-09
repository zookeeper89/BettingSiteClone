import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: false,
        trim: true,
    },
    google_id: {
        type: String,
        required: false,
        trim: true,
    },
    facebook_id: {
        type: String,
        required: false,
        trim: true,
    },
    reset: {
        token: {
            type: String,
            required: false,
            trim: true,
        },
        createdAt: {
            type: Date,
            required: false,
            trim: true,
        },
    },
    name: {
        type: String,
        required: false,
        trim: true,
    },
    password: {
        type: String,
        required: false,
        bcrypt: true,
    },
    phone: {
        type: Number,
        required: false,
        trim: true,
    },
    address: {
        type: String,
        required: false,
        trim: true,
    },
    zip: {
        type: Number,
        required: false,
        trim: true,
    },
    stripeCustomer: {
        type: String,
        required: false,
        trim: true,
    },
    role: {
        type: String,
        required: false,
        trim: true,
    }
},{timestamps:true})

export default mongoose.models.UserModel || mongoose.model("UserModel", UserSchema, "users");