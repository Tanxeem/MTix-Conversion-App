import mongoose from "mongoose"
import { DB_URL } from "./server.js";

const connectDB = async () => {
 try {
    const db = await mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
     });
     console.log('MongoDB Connected Successfully');
 } catch (error) {
    console.log("Failed to connect to database", error.message);
 }
};

export default connectDB;