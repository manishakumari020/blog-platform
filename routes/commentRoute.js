const express = require("express");
const router = express.Router();

const commentController = require("../controllers/commentController");
const authenticateToken = require("../middleware/authenticateToken");

//  Add a comment to a post
router.post("/:postId/comments", authenticateToken, commentController.addComment);

// Get all comments for a post
router.get("/:postId/comments", commentController.getCommentsByPostId);

module.exports = router;
