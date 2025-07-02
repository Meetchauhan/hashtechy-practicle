import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected", connect.connection.host);
  } catch (e) {
    console.error("Error in Databse connection", e);
  }
};
export default connectDB;
