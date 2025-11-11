import express from "express";

import {
    createPost,
    getPosts,
    updatePost,
    deletePost
} from "../controllers/post.controller.js";

import { protect, restrictTo } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", protect, createPost);
router.put("/:id", protect, restrictTo("admin"), updatePost);
router.delete("/:id", protect, restrictTo("admin"), deletePost);

export default router;
