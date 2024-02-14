import mongoose from "mongoose";

export default async function connectToMongo() {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB");
  }
}
