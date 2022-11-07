import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
    rental_id: {
        type: String,
        required: false,
        trim: true,
    },
    user_id: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        from_date: {
            type: Date,
            required: false,
            trim: true,
        },
        to_date: {
            type: Date,
            required: false,
            trim: true,
        },
    },
    booking_details: {
        type: String,
        required: false,
        trim: true,
    },
    price: {
        type: Number,
        required: false,
        trim: true,
    },
},{timestamps:true})

export default mongoose.models.BookingModel || mongoose.model("BookingModel", BookingSchema, "bookings");