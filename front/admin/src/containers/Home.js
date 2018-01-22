import React from 'react'
import AddVideo from "../AddVideo"
import VideoList from "../VideoList"

class Home extends React.Component {

  state = {
    videos: null,
    loading: true,
  };

  async componentDidMount() {

    const promise = await window.fetch('/api/v1/admin/videos', {
      headers: new Headers({
        'Content-Type': 'application/json',
        'Api-Token': localStorage.getItem('api_token')
      })
    });

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
      headers: new Headers({
        'Content-Type': 'application/json',
        'Api-Token': localStorage.getItem('api_token')
      })
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
      headers: new Headers({
        'Content-Type': 'application/json',
        'Api-Token': localStorage.getItem('api_token')
      })
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
        <AddVideo loading={this.state.loading} onSubmit={this.onSubmit} />
        <VideoList
          videos={this.state.videos}
          deleteVideo={this.deleteVideo}
        />
      </div>
    )
  }
}

export default Home

