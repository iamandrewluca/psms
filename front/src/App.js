import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    videos: [{"id":25,"videoId":"nShlloNgM2E","created_at":"2017-11-13 02:23:39","updated_at":"2017-11-13 02:23:39"},{"id":30,"videoId":"Cc0WWP45plE","created_at":"2017-11-13 02:27:16","updated_at":"2017-11-13 02:27:16"},{"id":31,"videoId":"_gEjmghHkD8","created_at":"2017-11-13 02:27:27","updated_at":"2017-11-13 02:27:27"},{"id":32,"videoId":"Cc0WWP45plE","created_at":"2017-11-13 02:27:30","updated_at":"2017-11-13 02:27:30"},{"id":33,"videoId":"nShlloNgM2E","created_at":"2017-11-13 02:27:34","updated_at":"2017-11-13 02:27:34"},{"id":34,"videoId":"CQnyF5l68i8","created_at":"2017-11-13 02:30:32","updated_at":"2017-11-13 02:30:32"},{"id":35,"videoId":"CQnyF5l68i8","created_at":"2017-11-13 02:30:34","updated_at":"2017-11-13 02:30:34"}]
  };


  render() {

    const { videos } = this.state;

    return (
      <div>
        <header className="bg-light mb-3">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">

                <nav className="navbar navbar-light">
                  <a className="navbar-brand" href="/">
                    <img src={logo} width="30" height="30" alt=""
                         className="d-inline-block align-top bg-dark rounded-circle mr-2" />
                    Our Holly Foo Bar
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
              {videos.map((video, idx) => idx % 2 === 0
                ? <VideoEmbed key={video.id} video={video} />
                : <VideoFake key={video.id} video={video} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

function VideoEmbed({video}) {
  return (
    <div className="card mb-2 embed-responsive embed-responsive-16by9">
      <iframe
        title={`YouTube Video ${video.video}`}
        src={`https://www.youtube.com/embed/${video.videoId}`}
        frameBorder="0" allowFullScreen
      />
    </div>
  )
}

function VideoFake({video}) {
  return (
    <div className="card mb-2 embed-responsive embed-responsive-16by9">
      <div className="video-fake">
        <img
          className="video-fake__image" alt={`${video.video}`}
          src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
        />
        <svg className="video-fake__button" version="1.1" viewBox="0 0 68 48">
          <path className="video-fake__button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#212121" fill-opacity="0.8" />
          <path d="M 45,24 27,14 27,34" fill="#fff" />
        </svg>
      </div>
    </div>
  )
}
