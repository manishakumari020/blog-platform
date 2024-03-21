const commentService = require('../services/commentService');

const addComment = async (req, res) => {
    try {
        const { content } = req.body;
        //const { userId } = req.user;
        const author = req.user.id; 
        const { postId } = req.params;
        const comment = await commentService.createComment({ content, author, post: postId });
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getCommentsByPostId = async (req, res) => {
    try {
        const { postId } = req.params;
        const comments = await commentService.getCommentsByPostId(postId);
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addComment, getCommentsByPostId };
