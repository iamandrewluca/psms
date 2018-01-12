import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

class App extends Component {

  state = {
    videos: null
  };

  async componentDidMount() {
    const promise = await window.fetch('/api/v1');

    if (promise.status === 200) {
      const videos = await promise.json();
      this.setState({videos});
    }
  }

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
                    Our Foo Bar
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
              {videos
                ? videos.length
                  ? videos.map((video, idx) => false
                    ? <VideoEmbed key={video.id} video={video} />
                    : <VideoFake onClick={this.onClick} key={video.id} video={video} />)
                  : <div>No videos</div>
                : <div>Loading videos...</div>
              }
            </div>
          </div>
        </div>

        <Modal isOpen={true} size="sm">
          <ModalHeader>
            Authenticate
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="mcc">Country Code</Label>
                <Input type="select" name="mcc" id="mcc">
                  <option hidden>Select a country code</option>
                  <option value="373">+373</option>
                  <option value="373">+373</option>
                  <option value="373">+373</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="mnc">Number Code</Label>
                <Input type="select" name="mnc" id="mnc">
                  <option hidden>Select a number code</option>
                  <option value="373">+373</option>
                  <option value="373">+373</option>
                  <option value="373">+373</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="number">Number</Label>
                <Input type="text" name="number" id="number" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary">Close</Button>
            <Button color="primary">Authenticate</Button>
          </ModalFooter>
        </Modal>
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

function VideoFake({video, onClick}) {
  return (
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
}
