import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
    title: { type: String, required: [true, "Title is required"], minlength: 3, trim: true },
    content: { type: String, required: [true, "Content is required"] },
    author: { type: String, required: [true, "Author is required"], default: "Anonymous" },
    category: { type: String, default: "General" }
}, { timestamps: true });

export default mongoose.model("Post", postSchema);
