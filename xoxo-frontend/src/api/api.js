import axios from 'axios';

const API_BASE = 'http://localhost:3001/api/v2';

export const fetchVideos = (query = '') => {
  const url = query ? `${API_BASE}/videos?query=${query}` : `${API_BASE}/videos`;
  return axios.get(url);
};

export const uploadVideo = (data) => {
  return axios.post(`${API_BASE}/videos`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};
