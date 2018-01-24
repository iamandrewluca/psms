import React from 'react';
import Header from "./components/Header"
import Home from "./containers/Home"
import SignIn from "./containers/SignIn"
import PrivateRoute from "./containers/PrivateRoute"
import GuestRoute from "./containers/GuestRoute"
import {connect} from "react-redux"
import {Route, Switch} from "react-router-dom"
import {Error404} from "./containers/Error404"

const App = ({isAuthenticated}) => (
  <div>
    <Header />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
          <Switch>
            <PrivateRoute isAuthenticated={isAuthenticated} exact path="/" component={Home} />
            <GuestRoute isAuthenticated={isAuthenticated} exact path="/signin" component={SignIn} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    </div>
  </div>
)

function mapStateToProps(state) {
  return {
    isAuthenticated: state.app.isAuthenticated,
  }
}

export default connect(mapStateToProps)(App);
