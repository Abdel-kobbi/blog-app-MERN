import express from "express";

const app = express();
// middleware
app.use(express.json());


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})