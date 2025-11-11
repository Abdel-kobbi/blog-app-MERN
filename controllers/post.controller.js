import Post from "../models/post.js";


// Create
export const createPost = async (req, res, next) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (err) {
        next(err);
    }
};


// Read (with filters + pagination)
export const getPosts = async (req, res, next) => {
    try {
        const { author, category, page = 1, limit = 5 } = req.query;
        const filter = {};
        if (author) filter.author = author;
        if (category) filter.category = category;

        const posts = await Post.find(filter)
            .skip((page - 1) * limit)
            .limit(Number(limit));

        res.json(posts);
    } catch (err) {
        next(err);
    }
};

// Update
export const updatePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(post);
    } catch (err) {
        next(err);
    }
};


// Delete
export const deletePost = async (req, res, next) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.json({ message: "Post deleted" });
    } catch (err) {
        next(err);
    }
};
