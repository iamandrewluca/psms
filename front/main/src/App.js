import React, { Component } from 'react';
import {connect} from "react-redux"
import './App.css';
import Header from './components/header'
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

import * as actions from './actions'
import {bindActionCreators} from "redux"
import {VideoEmbed} from "./components/video-embed"
import {VideoFake} from "./components/video-fake"

class App extends Component {

  componentDidMount() {
    this.props.actions.fetchVideos()
    this.props.actions.fetchProviders()
  }

  toggleModal = (isOpen) => (e) => this.props.actions.toggleModal(isOpen)

  render() {

    const {
      videos,
      token,
      user,
      signUpModal,
      authorizeModal,
      providers,
      countries,
      networks,
    } = this.props;

    return (
      <div>
        <Header />

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
              {videos
                ? videos.length
                  ? videos.map((video) => token && user.validated
                    ? <VideoEmbed key={video.id} video={video} />
                    : <VideoFake onClick={this.toggleModal(true)} key={video.id} video={video} />)
                  : <div>No videos</div>
                : <div>Loading videos...</div>
              }
            </div>
          </div>
        </div>

        <Modal isOpen={signUpModal} size="sm">
          <Form onSubmit={this.props.actions.signUpConsumer}>
            <ModalHeader>
              Authenticate
            </ModalHeader>
            <ModalBody>
              {providers
                ? providers.length
                  ? (
                    <div>
                      <FormGroup>
                        <Label for="mcc">Country Code</Label>
                        <Input type="select" name="mcc" id="mcc" onChange={this.props.actions.countrySelected}>
                          <option hidden>Select a country code</option>
                          {Object.entries(countries).map(([_, country]) => (
                            <option key={country.mcc} value={country.mcc} title={`${country.country} (${country.iso})`}>
                              +{country.country_code}
                            </option>
                          ))}
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="mnc">Network</Label>
                        <Input type="select" name="mnc" id="mnc">
                          <option hidden>Select a network</option>
                          {Object.entries(networks).map(([_, network], idx) => (
                            <option key={idx} value={network.mnc} title={`${network.network}`}>
                              {network.network}
                            </option>
                          ))}
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="number">Number</Label>
                        <Input type="number" name="number" id="number" />
                      </FormGroup>
                    </div>
                  )
                  : <div>No providers for the moment</div>
                : <div>Loading...</div>
              }
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggleModal(false)} disabled={!providers} >Close</Button>
              <Button color="primary" disabled={!providers}>Authenticate</Button>
            </ModalFooter>
          </Form>
        </Modal>


        <Modal isOpen={authorizeModal} size="sm">
          <Form onSubmit={this.props.actions.signUpConsumer}>
            <ModalHeader>
              Authorize
            </ModalHeader>
            <ModalBody>
              Send SMS to #
            </ModalBody>
            <ModalFooter>
              <button onClick={this.props.actions.recheckStatus} className="btn btn-sm btn-link text-secondary">Recheck status</button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.app.videos,
    token: state.app.apiToken,
    user: state.app.user,
    signUpModal: state.app.signUpModal,
    authorizeModal: state.app.authorizeModal,
    providers: state.app.providers,
    countries: state.app.countries,
    networks: state.app.networks,
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
