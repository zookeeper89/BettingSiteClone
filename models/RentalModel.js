import mongoose from 'mongoose';

const RentalSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        trim: true,
    },
},{timestamps:true})

export default mongoose.models.RentalModel || mongoose.model("RentalModel", RentalSchema, "agents");