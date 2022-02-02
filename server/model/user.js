import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  isAdmin: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);
export default User;
