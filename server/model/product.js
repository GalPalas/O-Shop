import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String },
  price: { type: Number },
  category: { type: String },
  imgUrl: { type: String },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
