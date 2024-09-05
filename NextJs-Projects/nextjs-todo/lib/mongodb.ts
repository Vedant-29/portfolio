import { error } from "console";
import mongoose from "mongoose"

export default async function connectDB() {
    const mongoUrl = process.env.MONGODB_URL;

    if (!mongoUrl) {
        throw new Error("MongoDB URL is not defined")
    }

    try {
        await mongoose.connect(mongoUrl)        
    } catch (error) {
        throw new Error("Error connecting mongoDb Atlas")
    }
}