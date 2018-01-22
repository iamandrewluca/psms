import React from 'react'
import {Redirect, Route} from "react-router"

const GuestRoute = ({isNotAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isNotAuthenticated ? (
      <Component isNotAuthenticated={isNotAuthenticated} {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )} />
)

export default GuestRoute
