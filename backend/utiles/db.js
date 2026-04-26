import mongoose from "mongoose";

export const dbConnect = async () => {
    if (mongoose.connection.readyState >= 1) return;

    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Database connected...");
    } catch (error) {
        console.error("DB error:", error.message);
        process.exit(1);
    }
};