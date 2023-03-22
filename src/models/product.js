import { Schema, model } from "mongoose";

const productSchema = Schema({
	name: String,
	price: Number,
	description: String,
	status: Boolean,
});

export default model("Product", productSchema);
