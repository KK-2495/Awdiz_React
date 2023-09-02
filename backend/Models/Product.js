import mongoose from "mongoose";
import { Schema } from "mongoose";

const product = new Schema ({
    name: String,
    category: String,
    image: String,
    price: Number
});

export default mongoose.model("Product", product);