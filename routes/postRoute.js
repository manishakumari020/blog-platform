const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");
const authenticateToken = require("../middleware/authenticateToken");

// Create a new post
router.post("/", authenticateToken, postController.createPost);

// Get all posts
router.get("/", postController.getAllPosts);

// Update a post
router.put("/:id", authenticateToken, postController.updatePost);

// Delete a post
router.delete("/:id", authenticateToken, postController.deletePost);

module.exports = router;
