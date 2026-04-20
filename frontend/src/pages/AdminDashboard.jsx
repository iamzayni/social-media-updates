import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:5000/api/posts');
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const updateStatus = async (id, status) => {
    await axios.put(`http://localhost:5000/api/posts/${id}`, { status });
    fetchPosts();
  };

  const deletePost = async (id) => {
    await axios.delete(`http://localhost:5000/api/posts/${id}`);
    fetchPosts();
  };

  return (
    <div>
      {posts.map(post => (
        <div key={post._id}>
          <img src={post.imageUrl} width="200" alt={post.title} />
          <h3>{post.title}</h3>
          <p>{post.status}</p>

          <button onClick={() => updateStatus(post._id, 'approved')}>Approve</button>
          <button onClick={() => updateStatus(post._id, 'rejected')}>Reject</button>
          <button onClick={() => deletePost(post._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
