const Comment = require('../models/commentModel');

const createComment = async ({ content, author, post }) => {
    try {
        const comment = new Comment({ content, author, post });
        await comment.save();
        return comment;
    } catch (error) {
        throw error;
    }
};

const getCommentsByPostId = async (postId) => {
    try {
        return await Comment.find({ post: postId }).populate('author', 'username');
    } catch (error) {
        throw error;
    }
};

module.exports = { createComment, getCommentsByPostId };
