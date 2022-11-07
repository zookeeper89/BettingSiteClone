import mongoose from "mongoose";

const RentalSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: false,
      trim: true,
    },
    landlord: {
      type: String,
      required: false,
      trim: true,
    },
    price: {
      type: Number,
      required: false,
      trim: true,
    },
    sale_price: {
      type: Number,
      required: false,
      trim: true,
    },
    images: [
      {
        type: String,
        required: false,
        trim: true,
      },
    ],
    category: [
      {
        type: String,
        required: false,
        trim: true,
      },
    ],
    description: {
      type: String,
      required: false,
      trim: true,
    },
    dawa_id: {
      type: String,
      required: false,
      trim: true,
    },
    address: {
      type: String,
      required: false,
      trim: true,
    },
    zip_name: {
      type: String,
      required: false,
      trim: true,
    },
    zip_code: {
      type: Number,
      required: false,
      trim: true,
    },
    country: {
      type: String,
      required: false,
      trim: true,
    },
    longitude: {
      type: String,
      required: false,
      trim: true,
    },
    latitude: {
      type: String,
      required: false,
      trim: true,
    },
    facilities: {
      wifi: {
        type: Boolean,
        required: false,
        trim: true,
      },
      washing_machine: {
        type: Boolean,
        required: false,
        trim: true,
      },
      drying_machine: {
        type: Boolean,
        required: false,
        trim: true,
      },
      tv: {
        type: Boolean,
        required: false,
        trim: true,
      },
      outdoor_swimmingpool: {
        type: Boolean,
        required: false,
        trim: true,
      },
      indoor_swimmingpool: {
        type: Boolean,
        required: false,
        trim: true,
      },
      spa: {
        type: Boolean,
        required: false,
        trim: true,
      },
      activityroom: {
        type: Boolean,
        required: false,
        trim: true,
      },
      grill: {
        type: Boolean,
        required: false,
        trim: true,
      },
      pejs: {
        type: Boolean,
        required: false,
        trim: true,
      },
      sauna: {
        type: Boolean,
        required: false,
        trim: true,
      },
      charger_car: {
        type: Boolean,
        required: false,
        trim: true,
      },
      havudsigt: {
        type: Boolean,
        required: false,
        trim: true,
      },
      pets_allowed: {
        type: Boolean,
        required: false,
        trim: true,
      },
    },
    metersFromWater: {
      type: Number,
      required: false,
      trim: true,
    },
    size: {
      bedrooms: {
        type: Number,
        required: false,
        trim: true,
      },
      beds: {
        type: Number,
        required: false,
        trim: true,
      },
      bathrooms: {
        type: Number,
        required: false,
        trim: true,
      },
      guests: {
        type: Number,
        required: false,
        trim: true,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.models.RentalModel || mongoose.model("RentalModel", RentalSchema, "rentals");