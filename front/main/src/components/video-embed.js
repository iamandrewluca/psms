import React from 'react'

export const VideoEmbed = ({video}) => (
  <div className="card mb-2 embed-responsive embed-responsive-16by9">
    <iframe
      title={`YouTube Video ${video.video}`}
      src={`https://www.youtube.com/embed/${video.videoId}`}
      frameBorder="0" allowFullScreen
    />
  </div>
)
