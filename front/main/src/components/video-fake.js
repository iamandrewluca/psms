import React from 'react'

export const VideoFake = ({video, onClick}) => (
  <div onClick={onClick}  className="card mb-2 embed-responsive embed-responsive-16by9">
    <div className="video-fake">
      <img
        className="video-fake__image" alt={`${video.video}`}
        src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
      />
      <svg className="video-fake__button" version="1.1" viewBox="0 0 68 48">
        <path className="video-fake__button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#212121" fillOpacity="0.8" />
        <path d="M 45,24 27,14 27,34" fill="#fff" />
      </svg>
    </div>
  </div>
)
