import mongoose from "mongoose";


const connectiondb = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("✅ MongoDB Connected"))
        .catch(err => console.error(err));
}

export default connectiondb;