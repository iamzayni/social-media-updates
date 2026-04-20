import React, { useState } from 'react';
import axios from 'axios';

export default function UploadPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      alert('Please choose an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);

    try {
      setUploading(true);
      await axios.post('http://localhost:5000/api/posts/upload', formData);
      alert('Uploaded');
      setTitle('');
      setDescription('');
      setImage(null);
    } catch (error) {
      const message = error.response?.data?.error || 'Upload failed. Please try again.';
      alert(message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <input type="file" onChange={e => setImage(e.target.files[0])} />
      <button disabled={uploading}>{uploading ? 'Uploading...' : 'Upload'}</button>
    </form>
  );
}