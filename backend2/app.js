import express from "express";
import cors from "cors";
import authRoutes from "./src/routes/auth.routes.js";
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"

const app = express();

// middlewares
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(bodyParser.json());
app.use(cookieParser())

// routes
app.use("/api", authRoutes);

export default app;