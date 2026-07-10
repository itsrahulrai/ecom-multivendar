// import mongoose from "mongoose";

// export const dbConnect = async () => {
//     if (mongoose.connection.readyState >= 1) return;

//     try {
//         await mongoose.connect(process.env.DB_URL);
//         console.log("Database connected...");
//     } catch (error) {
//         console.error("DB error:", error.message);
//         process.exit(1);
//     }
// };

import mongoose from "mongoose";
import dns from "node:dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

let isConnected = false;

export const dbConnect = async () => {
    try {
        if (isConnected || mongoose.connection.readyState === 1) {
            console.log("✅ Database already connected");
            return;
        }

        const conn = await mongoose.connect(process.env.DB_URL, {
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 45000,
        });

        isConnected = conn.connections[0].readyState === 1;

        console.log(`✅ MongoDB Atlas Connected`);
        console.log(`Database: ${conn.connection.name}`);
    } catch (error) {
        console.error("❌ MongoDB Connection Error");
        console.error(error.message);
        process.exit(1);
    }
};