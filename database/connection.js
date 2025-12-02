import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongouri = process.env.MONGOURI;
const connectDB = async () => {
  try {
    await mongoose.connect(mongouri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log("mongo connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

export default connectDB;
