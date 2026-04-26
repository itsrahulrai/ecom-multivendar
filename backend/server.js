import express from "express";
import dotenv from "dotenv";
import cors from "cors"; 
import bodyParsern from "body-parser"
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import { dbConnect } from "./utiles/db.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

dbConnect();


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));(
app.use(bodyParsern.json()))
app.use(cookieParser())
app.use('/api',authRoutes)



app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});