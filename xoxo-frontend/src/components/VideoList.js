import React from 'react';

function VideoList({ videos }) {
  return (
    <div className="row">
      {videos.map(video => (
        <div className="col-md-4 mb-4" key={video.id}>
          <div className="card">
            <video controls width="100%" src={video.video_url}></video>
            <div className="card-body">
              <h5>{video.title}</h5>
              <p>{video.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
