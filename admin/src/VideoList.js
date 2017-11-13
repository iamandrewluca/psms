import React from 'react';

function VideoList({videos, deleteVideo}) {
  return (
    <div className="list-group">
      {videos
        ? videos.length
          ? videos.map(video => <VideoListItem key={video.id} video={video} deleteVideo={deleteVideo(video.id)} />)
          : <div className="list-group-item">No videos added</div>
        : <div className="list-group-item">Loading videos...</div>
      }
    </div>
  )
}

export default VideoList

function VideoListItem({video, deleteVideo}) {
  return (
    <div className="list-group-item mb-2 d-flex justify-content-between align-items-center">
      <span className="d-flex align-items-center">
        <div className="badge badge-warning badge-pill mr-2">{video.id}</div>
        {video.videoId}
      </span>
      <button onClick={deleteVideo} className="btn btn-link text-danger p-0 px-2">&times;</button>
    </div>
  )
}
