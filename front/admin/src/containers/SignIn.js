import React from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as actions from "../actions"

const SignIn = ({actions, loading}) => (
  <form onSubmit={actions.signIn}>
    <fieldset className="card my-3" disabled={loading}>
      <div className="card-header">
        Authenticate
      </div>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input name="email" id="email" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input name="password" id="password" type="password" className="form-control"/>
        </div>
      </div>
      <div className="card-footer text-right">
        <button className="btn btn-primary">Sign In</button>
      </div>
    </fieldset>
  </form>
)

function mapStateToProps(state) {
  return {
    loading: state.app.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
