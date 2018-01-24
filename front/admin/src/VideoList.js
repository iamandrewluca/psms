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
    <div className="list-group-item d-flex justify-content-between align-items-center">
      <div className="media align-items-center">
        <img className="mr-3 w-25" src={`http://img.youtube.com/vi/${video.videoId}/sddefault.jpg`} alt="" />
        <div className="media-body">
          <h5 className="m-0 d-flex align-items-center">
            {video.videoId}
            <button onClick={deleteVideo} className="btn btn-link text-danger ml-auto">&times;</button>
          </h5>
        </div>
      </div>
    </div>
  )
}
