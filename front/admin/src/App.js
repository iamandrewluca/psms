import React, { Component } from 'react';
import AddVideo from "./AddVideo";
import VideoList from "./VideoList";

class App extends Component {

  state = {
    videos: null,
    loading: true,
  };

  async componentDidMount() {
    const promise = await window.fetch('/api/v1/admin/videos');

    if (promise.status === 200) {
      const videos = await promise.json();
      this.setState({
        videos,
        loading: false,
      })
    }
  }

  onSubmit = async (e) => {
    e.preventDefault();

    const videoId = e.target.videoId.value;
    if (!videoId.length) return;

    this.setState({
      loading: true,
    });

    const promise = await window.fetch('/api/v1/admin/videos', {
      method: 'POST',
      body: JSON.stringify({videoId}),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (promise.status === 200) {
      const video = await promise.json();

      this.setState({
        videos: [video, ...this.state.videos],
        loading: false,
      });
    } else {
      this.setState({
        loading: false,
      });
    }
  };

  deleteVideo = (id) => async (e) => {
    this.setState({
      loading: true
    });

    const promise = await window.fetch(`/api/v1/admin/videos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (promise.status === 200) {

      this.setState({
        videos: this.state.videos.filter(video => video.id !== id),
        loading: false,
      });
    } else {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    return (
      <div>
        <header className="bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
                <nav className="navbar navbar-light">
                  <span className="navbar-brand mb-0 h1">Foo Bar</span>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
              <AddVideo loading={this.state.loading} onSubmit={this.onSubmit} />
              <VideoList
                videos={this.state.videos}
                deleteVideo={this.deleteVideo}
              />
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default App;
