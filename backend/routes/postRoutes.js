const express = require('express');
const router = express.Router();
const multer = require('multer');

const {
  uploadPost,
  getPosts,
  updateStatus,
  deletePost
} = require('../controllers/postController');

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('image'), uploadPost);
router.get('/', getPosts);
router.put('/:id', updateStatus);
router.delete('/:id', deletePost);

module.exports = router;