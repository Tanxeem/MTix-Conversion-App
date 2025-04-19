import express from "express";
import { PORT } from "./config/server.js";
import userRouter from "../src/routes/user.routes.js";
import cookiesparser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/dbConnect.js";

const app = express();

// middleware 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookiesparser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}))

app.get("/test", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Test Route"
    })
})

app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB()
});