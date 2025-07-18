import React, { useState } from 'react';
import { uploadVideo } from '../api/api';

function VideoUpload({ onUploadSuccess }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);

    try {
      setLoading(true);
      await uploadVideo(formData);
      onUploadSuccess();
      setTitle('');
      setDescription('');
      setFile(null);
    } catch (err) {
      alert('Upload failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h4>Upload New Video</h4>
      <input className="form-control mb-2" type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <textarea className="form-control mb-2" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input className="form-control mb-2" type="file" accept="video/*" onChange={e => setFile(e.target.files[0])} required />
      <button className="btn btn-primary" type="submit" disabled={loading}>
        {loading ? 'Uploading...' : 'Upload'}
      </button>
    </form>
  );
}

export default VideoUpload;
