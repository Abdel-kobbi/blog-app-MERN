import "dotenv/config";
import express from "express";
import connectiondb from "./db.js";
import postRoutes from "./routes/postRoutes.js";
import ErrorMiddleware from "./middleware/error.js"
import morgan from "morgan";

const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"))

connectiondb();

app.use("/api/posts", postRoutes);


app.use(ErrorMiddleware);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})