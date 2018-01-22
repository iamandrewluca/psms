import React, { Component } from 'react';
import Header from "./components/Header"
import Home from "./containers/Home"
import Login from "./containers/Login"
import PrivateRoute from "./containers/PrivateRoute"
import GuestRoute from "./containers/GuestRoute"
import {connect} from "react-redux"

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
              <PrivateRoute isAuthenticated={this.props.isAuthenticated} exact path="/" component={Home} />
              <GuestRoute isNotAuthenticated={!this.props.isAuthenticated} exact path="/login" component={Login} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.app.isAuthenticated,
  }
}

export default connect(mapStateToProps)(App);
