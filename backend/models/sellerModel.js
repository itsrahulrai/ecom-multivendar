import { Schema, model } from "mongoose";

const sellerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select:false
    },
    role: {
        type: String,
        default: "seller",
    },
     status: {
        type: String,
        default: "pending",
    },
     payment: {
        type: String,
        default: "inactive",
    },
     method: {
        type: String,
        required : true
    },
     image: {
        type: String,
        default: " ",
    },
    shopInfo: {
        type: Object,
        default: {}
    },
     agree: {
        type: Boolean,
        default: false,
        required: true
    }
    
    
}, {
    timestamps: true,
});

export default model("sellers", sellerSchema);

/*In Mongoose:

"Admin" → model name (singular)
Mongoose automatically converts it to:
lowercase
plural
creates collection: admins */