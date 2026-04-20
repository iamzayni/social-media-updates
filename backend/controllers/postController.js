const Post = require('../models/Post');
const cloudinary = require('../config/cloudinary');

exports.uploadPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!req.file) {
      return res.status(400).json({ error: 'Please select an image to upload.' });
    }

    if (!cloudinary.isConfigured) {
      return res.status(500).json({
        error: 'Cloudinary credentials are missing or invalid in backend/.env.'
      });
    }

    const result = await cloudinary.uploader.upload(req.file.path);

    const post = await Post.create({
      title,
      description,
      imageUrl: result.secure_url,
      cloudinaryId: result.public_id
    });

    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPosts = async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
};

exports.updateStatus = async (req, res) => {
  const { status, comment } = req.body;

  const post = await Post.findByIdAndUpdate(
    req.params.id,
    { status, adminComment: comment },
    { new: true }
  );

  res.json(post);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  await cloudinary.uploader.destroy(post.cloudinaryId);
  await post.deleteOne();

  res.json({ message: 'Deleted' });
};