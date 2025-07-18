import React, { useEffect, useState } from 'react';
import { fetchVideos } from './api/api';
import VideoList from './components/VideoList';
import VideoUpload from './components/VideoUpload';
import SearchBar from './components/SearchBar';

function App() {
  const [videos, setVideos] = useState([]);

  const loadVideos = async (query = '') => {
    try {
      const res = await fetchVideos(query);
      setVideos(res.data);
    } catch (err) {
      console.error('Failed to fetch videos', err);
    }
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🎥 Video Platform</h2>
      <VideoUpload onUploadSuccess={loadVideos} />
      <SearchBar onSearch={loadVideos} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
