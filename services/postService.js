const Post = require('../models/postModel');

const getAllPosts = async () => {
  return await Post.find().populate('author', 'username');
};

const createPost = async ({ title, content, author }) => {
  const post = new Post({ title, content, author });
  await post.save();
  return post;
};

const updatePost = async (postId, { title, content }) => {
  const post = await Post.findByIdAndUpdate(postId, { title, content }, { new: true });
  if (!post) throw new Error('Post not found');
  return post;
};

const deletePost = async (postId) => {
  const post = await Post.findByIdAndDelete(postId);
  if (!post) throw new Error('Post not found');
};

module.exports = { getAllPosts, createPost, updatePost, deletePost };
