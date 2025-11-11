import "dotenv/config";
import express from "express";
import morgan from "morgan";
import session from "express-session";
import connectiondb from "./db.js";
import postRoutes from "./routes/postRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import ErrorMiddleware from "./middleware/error.js"

const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } //  true si HTTPS
}));

connectiondb();

app.use("/api/posts", postRoutes);
app.use("/", userRoutes);


app.use(ErrorMiddleware);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})